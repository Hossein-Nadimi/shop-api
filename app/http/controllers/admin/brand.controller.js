const { BrandModel } = require("../../../models/brand.model");
const { deleteNullishData, createSlug } = require("../../../utils/functions");
const { addBrandSchema, updateBrandSchema } = require("../../validators/admin/brand.schema");
const Controller = require("../controller");

class BrandController extends Controller {
    async getAllBrands(req, res, next) {
        try {
            let { search, page, itemsPerPage } = req.query
            if(!page) page = 0
            let brands
            if(search) {
                brands = await BrandModel
                    .find({ $text: { $search: search } })
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0 })
            } else {
                brands = await BrandModel
                    .find({})
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0 })
            }
            return res.status(200).json({
                status: 'success',
                data: {
                    brands
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async addBrand(req, res, next) {
        try {
            const { name, desc } = await addBrandSchema.validateAsync(req.body)
            const slug = createSlug(name)
            const brand = await BrandModel.create({ name, slug, desc })
            if(!brand) throw createHttpError.InternalServerError('خطای سرور')
            return res.status(201).json({
                status: 'success',
                data: {
                    message: 'برند ایجاد شد.'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async getBrandById(req, res, next) {
        try {
            const { id } = req.params
            const brand = await this.findBrandById(id)
            return res.status(200).json({
                message: 'success',
                data: {
                    brand
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async updateBrandById(req, res, next) {
        try {
            const { id } = req.params
            const data = await updateBrandSchema.validateAsync(req.body)
            deleteNullishData(data)
            if(data.name) data.slug = createSlug(data.name)
            const updateResult = await BrandModel.updateOne({ _id: id }, { $set: data })
            if(updateResult.matchedCount === 0) throw createHttpError.NotFound('برند مورد نظر یافت نشد.')
            if(updateResult.modifiedCount === 0) throw createHttpError.InternalServerError('خطای سرور')
            return res.status(200).json({
                status: 'success',
                data: {
                    message: 'برند با موفقیت بروزرسانی شد.'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async removeBrandById(req, res, next) {
        try {
            const { id } = req.params
            const brand = await this.findBrandById(id)
            const deleteResult = await BrandModel.deleteMany({ _id: brand._id })
            if(deleteResult.deletedCount == 0) throw createError.InternalServerError('خطای سرور')
            return res.status(200).json({
                status: 'success',
                data: {
                    message: 'برند مورد نظر حذف شد.'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async findBrandById(id) {
        const brand = await BrandModel.findById(id)
        if(!brand) throw createHttpError.NotFound('برند مورد نظر یافت نشد.')
        return brand
    }
}

module.exports = {
    BrandController: new BrandController()
}