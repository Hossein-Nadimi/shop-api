const createHttpError = require("http-errors");
const { BrandModel } = require("../../../models/brand.model");
const { CategoryModel } = require("../../../models/category.model");
const { ProductModel } = require("../../../models/product.model");
const { SlideModel } = require("../../../models/slide.model");
const { UserModel } = require("../../../models/user.model");
const { addFilter } = require("../../../utils/functions");
const Controller = require("../controller");

class HomeController extends Controller {
    async getAllProducts(req, res, next) {
        try {
            let { search, page, itemsPerPage } = req.query
            let products
            if(search) {
                products = await ProductModel
                    .find({ $text: { $search: search } })
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0, bookmarks: 0, comments: 0 })
                    .populate([
                        { path: 'brand', select: { desc: 0, updatedAt: 0 } }, 
                        { path: 'category', select: { parent: 0, desc: 0, updatedAt: 0 } }
                    ])
            } else {
                products = await ProductModel
                    .find({})
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0, bookmarks: 0, comments: 0 })
                    .populate([
                        { path: 'brand', select: { desc: 0, updatedAt: 0 } }, 
                        { path: 'category', select: { parent: 0, desc: 0, updatedAt: 0 } }
                    ])
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

    async getSingleProduct(req, res, next) {
        try {
            const { slug } = req.params
            const product = await ProductModel
                .findOne({ slug })
                .populate([
                    { path: 'brand', select: { desc: 0, updatedAt: 0 } },
                    { path: 'category', select: { parent: 0, desc: 0, updatedAt: 0 } }
                ])
            if(!product) createHttpError.NotFound('محصول مورد نظر یافت نشد.')
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

    async getCategoryProducts(req, res, next) {
        try {
            const { slug } = req.params
            const category = await CategoryModel.findOne({ slug })
            if(!category) throw createHttpError.NotFound('دسته بندی مورد نظر یافت نشد.')
            let { page, itemsPerPage } = req.query
            delete req.query.page
            delete req.query.itemsPerPage
            const data = { ...req.query }
            addFilter(data)
            data.category = category._id
            const products = await ProductModel.find({ ...data })
                .sort({ createdAt: -1 })
                .limit(itemsPerPage)
                .skip(page)
                .select({ updatedAt: 0, bookmarks: 0, comments: 0 })
                .populate([
                    { path: 'brand', select: { desc: 0, updatedAt: 0 } },
                    { path: 'category', select: { parent: 0, desc: 0, updatedAt: 0 } }
                ])
            if(!products.length) throw createHttpError.NotFound('محصولی یافت نشد.')
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

    async getBrandProducts(req, res, next) {
        try {
            const { slug } = req.params
            const brand = await BrandModel.findOne({ slug })
            if(!brand) throw createHttpError.NotFound('برند مورد نظر یافت نشد.')
            let { page, itemsPerPage } = req.query
            delete req.query.page
            delete req.query.itemsPerPage
            const data = { ...req.query }
            addFilter(data)
            data.brand = brand._id
            const products = await ProductModel.find({ ...data })
                .sort({ createdAt: -1 })
                .limit(itemsPerPage)
                .skip(page)
                .select({ updatedAt: 0, bookmarks: 0, comments: 0 })
                .populate([
                    { path: 'brand', select: { desc: 0, updatedAt: 0 } },
                    { path: 'category', select: { parent: 0, desc: 0, updatedAt: 0 } }
                ])
            if(!products.length) throw createHttpError.NotFound('محصولی یافت نشد.')
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

    async getSlider(req, res, next) {
        try {
            const { slideCount } = req.query
            const slider = await SlideModel.find({}).sort({ createdAt: -1 }).limit(slideCount).select({ updatedAt: 0 })
            if(!slider) throw createHttpError.NotFound('هیچ اسلایدی اضافه نشده است.')
            return res.status(200).json({
                status: 'success',
                data: {
                    slider
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async getUserProfile(req, res, next) {
        try {
           const user = await UserModel.findById(req.user._id)
           return res.status(200).json({
            status: 'success',
            data: {
                user
            }
           }) 
        } catch (error) {
            next(error)
        }
    }

    async paymentGateway(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }

    async verifyPayment(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    HomeController: new HomeController()
}