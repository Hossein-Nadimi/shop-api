const { SlideModel } = require("../../../models/slide.model");
const { addSlideSchema } = require("../../validators/admin/slide.schema");
const Controller = require("../controller");
const path = require('path')
const { deleteFileFromPublic, deleteNullishData } = require("../../../utils/functions");

class SlideController extends Controller {
    async getAllSlides(req, res, next) {
        try {
            let { search, page, itemsPerPage } = req.query
            if(!page) page = 0
            let slides
            if(search) {
                slides = await SlideModel
                    .find({ $text: { $search: search } })
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0 })
            } else {
                slides = await SlideModel
                    .find({})
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0 })
            }
            return res.status(200).json({
                status: 'success',
                data: {
                    slides
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async addSlide(req, res, next) {
        try {
            const { title, link, uploadPath, fileName } = await addSlideSchema.validateAsync(req.body)
            const image = path.join(uploadPath, fileName).replace(/\\/g, '/')
            const slide = await SlideModel.create({ title, link, image })
            if(!slide) throw createHttpError.InternalServerError('خطای سرور')
            return res.status(201).json({
                status: 'success',
                data: {
                    message: 'اسلاید ایجاد شد.'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async getSlideById(req, res, next) {
        try {
            const { id } = req.params
            const slide = await this.findSlideById(id)
            return res.status(200).json({
                message: 'success',
                data: {
                    slide
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async updateSlideById(req, res, next) {
        try {
            const { id } = req.params
            const slide = await this.findSlideById(id)
            const data = { ...req.body }
            const { fileName, uploadPath } = req.body
            deleteNullishData(data)
            if(req.file) {
                data.image = path.join(uploadPath, fileName).replace(/\\/g, '/')
                deleteFileFromPublic(slide.image)
            }
            const updateResult = await SlideModel.updateOne({ _id: id }, { $set: data })
            if(updateResult.modifiedCount === 0) throw createHttpError.InternalServerError('خطای سرور')
            return res.status(200).json({
                status: 'success',
                data: {
                    message: 'اسلاید با موفقیت بروزرسانی شد.'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async removeSlideById(req, res, next) {
        try {
            const { id } = req.params
            const slide = await this.findSlideById(id)
            deleteFileFromPublic(slide.image)
            const deleteResult = await SlideModel.deleteMany({ _id: slide._id })
            if(deleteResult.deletedCount == 0) throw createError.InternalServerError('خطای سرور')
            return res.status(200).json({
                status: 'success',
                data: {
                    message: 'اسلاید مورد نظر حذف شد.'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async findSlideById(id) {
        const slide = await SlideModel.findById(id)
        if(!slide) throw createHttpError.NotFound('اسلاید مورد نظر یافت نشد.')
        return slide
    }
}

module.exports = {
    SlideController: new SlideController()
}