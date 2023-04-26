const createHttpError = require('http-errors')
const Joi = require('joi')

const addSlideSchema = Joi.object({
    title: Joi.string().min(3).max(30).error(createHttpError.BadRequest('نام برند باید حداقل 3 کاراکتر و حداکثر 30 کاراکتر باشد.')),
    link: Joi.string().min(3).max(100).error(createHttpError.BadRequest('توضیحات برند باید حداقل 3 کاراکتر و حداکثر 100 کاراکتر باشد.')),
    fileName: Joi.string().regex(/(\.jpg|\.jpeg|\.png|\.webp|\.gif)$/).error(createHttpError.BadRequest('لطفا یک تصویر معتبر وارد کنید.')),
    uploadPath: Joi.allow(''),
})

module.exports = {
    addSlideSchema
}