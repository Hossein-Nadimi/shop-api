const createHttpError = require("http-errors");
const { ProductModel } = require("../../../models/product.model");
const { getImagesFromReq, deleteFileFromPublic, deleteNullishData, createSlug } = require("../../../utils/functions");
const { addProductSchema, addInventorySchema } = require("../../validators/admin/product.schema");
const Controller = require("../controller");

class ProductController extends Controller {
    async getAllProducts(req, res, next) {
        try {
            let { search, page, itemsPerPage } = req.query
            if(!page) page = 0
            let products
            if(search) {
                products = await ProductModel
                    .find({ $text: { $search: search } })
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0 })
            } else {
                products = await ProductModel
                    .find({})
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0 })
            }
            return res.status(200).json({
                status: 'success',
                data: {
                    products
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async getProductById(req, res, next) {
        try {
            const { id } = req.params
            const product = await this.findProductById(id)
            return res.status(200).json({
                status: 'success',
                data: {
                    product
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async addProduct(req, res, next) {
        const images = getImagesFromReq(req?.files || [], req.body.uploadPath)
        try {
            if(!images.length) throw createHttpError.BadRequest('لطفا حداقل یک تصویر وارد کنید.')
            const { name, text, desc, category, brand, price, discount, isSpecial, tags } = await addProductSchema.validateAsync(req.body)
            const slug = createSlug(name)
            const product = await ProductModel.create({
                name, slug, text, desc, category, brand, price, discount, isSpecial, tags, images
            })
            if(!product) createHttpError.InternalServerError('خطای سرور')
            return res.status(201).json({
                status: 'success',
                data: {
                    message: 'محصول اضافه شد.'
                }
            })
        } catch (error) {
            for (const image of images) {
                deleteFileFromPublic(image)
            }
            next(error)
        }
    }

    async addInventoryToProduct(req, res, next) {
        try {
            const { id } = req.params
            let { color, size, quantity } = await addInventorySchema.validateAsync(req.body)
            const product = await ProductModel.findOne({
                $and: [{ _id: id }, { 'inventory.color': color }, { 'inventory.size': size }] 
            })

            if(product) {
                await ProductModel.updateOne({
                    _id: id,
                    'inventory.color': color,
                    'inventory.size': size 
                }, {
                    $set: { 'inventory.$': { color, size, quantity } }
                })
            } else {
                await ProductModel.updateOne({
                    _id: id,
                }, {
                    $push: { inventory: { color, size, quantity } }
                })
            }
            return res.status(200).json({
                status: 'success',
                data: {
                    message: 'محصول مورد نظر بروزرسانی شد.'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async updateProductById(req, res, next) {
        try {
            const { id } = req.params
            const product = await this.findProductById(id)
            const data = { ...req.body }
            if(req.files.length) {
                data.images = getImagesFromReq(req?.files || [], req.body.uploadPath)
                for (const image of product.images) {
                    deleteFileFromPublic(image)
                }
            }
            deleteNullishData(data)
            if(data.name) data.slug = createSlug(data.name)
            const updateResult = await ProductModel.updateOne({ _id: product._id }, { $set: data })
            if(updateResult.modifiedCount == 0) throw createHttpError.InternalServerError('خطای سرور')
            return res.status(200).json({
                status: 'success',
                data: {
                    message: 'محصول مورد نظر بروزرسانی شد.'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async removeProductById(req, res, next) {
        try {
            const { id } = req.params
            const product = await this.findProductById(id)
            const deleteResult = await ProductModel.deleteOne({ _id: product._id })
            if(deleteResult.deletedCount === 0) throw createHttpError.InternalServerError('خطای سرور')
            return res.status(200).json({
                status: 'success',
                data: {
                    message: 'محصول مورد نظر حذف شد.'
                }
            }) 
        } catch (error) {
            next(error)
        }
    }

    async findProductById(id) {
        const product = await ProductModel.findById(id)
        if(!product) createHttpError.NotFound('محصول مورد نظر یافت نشد.')
        return product
    }
}

module.exports = {
    ProductController: new ProductController()
}