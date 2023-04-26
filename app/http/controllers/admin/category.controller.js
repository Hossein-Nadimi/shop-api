const createHttpError = require("http-errors");
const { CategoryModel } = require("../../../models/category.model");
const { deleteNullishData, createSlug } = require("../../../utils/functions");
const { addCategorySchema, updateCategorySchema } = require("../../validators/admin/category.schema");
const Controller = require("../controller");

class CategoryController extends Controller {
    async getAllCategories(req, res, next) {
        try {
            let { search, page, itemsPerPage } = req.query
            if(!page) page = 0
            let categories
            if(search) {
                categories = await CategoryModel
                    .find({ $text: { $search: search } })
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0 })
                    .populate([{ path: 'children', select: { desc: 0, parent: 0, updatedAt: 0 } }])
            } else {
                categories = await CategoryModel
                    .find({ parent: undefined })
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0, parent: 0 })
                    .populate([{ path: 'children', select: { updatedAt: 0 } }])
            }
            return res.status(200).json({
                status: 'success',
                data: {
                    categories
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async addCategory(req, res, next) {
        try {
            const { name, desc, parent } = await addCategorySchema.validateAsync(req.body)
            const slug = createSlug(name)
            const category = await CategoryModel.create({ 
                name, 
                slug,
                parent: parent ? parent : null, 
                desc 
            })
            if(!category) throw createHttpError.InternalServerError('خطای سرور')
            return res.status(201).json({
                status: 'success',
                data: {
                    message: 'دسته بندی اضافه شد.'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async getCategoryById(req, res, next) {
        try {
            const { id } = req.params
            const category = await this.findCategoryById(id)
            return res.status(200).json({
                message: 'success',
                data: {
                    category
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async getParentCategories(req, res, next) {
        try {
            let { page, itemsPerPage } = req.query
            if(!page) page = 0
            const parentCategories = await CategoryModel
                .find({ parent: null })
                .sort({ createdAt: -1 })
                .limit(itemsPerPage)
                .skip(page)
                .select({ updatedAt: 0, parent: 0 })
            if(!parentCategories) throw createHttpError.InternalServerError('خطای سرور')
            return res.status(200).json({
                status: 'success',
                data: {
                    parentCategories
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async updateCategoryById(req, res, next) {
        try {
            const { id } = req.params
            const data = await updateCategorySchema.validateAsync(req.body)
            deleteNullishData(data)
            if(data.name) data.slug = createSlug(data.name)
            const updateResult = await CategoryModel.updateOne({ _id: id }, { $set: data })
            if(updateResult.matchedCount === 0) throw createHttpError.NotFound('دسته بندی مورد نظر یافت نشد.')
            if(updateResult.modifiedCount === 0) throw createHttpError.InternalServerError('خطای سرور')
            return res.status(200).json({
                status: 'success',
                data: {
                    message: 'دسته بندی با موفقیت بروزرسانی شد.'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async removeCategoryById(req, res, next) {
        try {
            const { id } = req.params
            const category = await this.findCategoryById(id)
            const deleteResult = await CategoryModel.deleteMany({ 
                $or: [
                    { _id: category._id },
                    { parent: category._id }
                ]
            })
            if(deleteResult.deletedCount == 0) throw createError.InternalServerError('خطای سرور')
            return res.status(200).json({
                status: 'success',
                data: {
                    message: 'دسته بندی مورد نظر حذف شد.'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async findCategoryById(id) {
        const category = await CategoryModel.findById(id).populate([{ path: 'children', select: { updatedAt: 0 } }])
        if(!category) throw createHttpError.NotFound('دسته بندی مورد نظر یافت نشد.')
        return category
    }
}

module.exports = {
    CategoryController: new CategoryController()
}