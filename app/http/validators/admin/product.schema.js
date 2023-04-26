const createHttpError = require('http-errors')
const Joi = require('joi')
const { MONGOIDPATTERN } = require('../../../utils/constants')

const addProductSchema = Joi.object({
    name: Joi.string().min(3).max(30).error(createHttpError.BadRequest('نام محصول باید حداقل 3 کاراکتر و حداکثر 30 کاراکتر باشد.')),
    text: Joi.string().error(createHttpError.BadRequest('لطفا توضیحات مختصری راجب محصول وارد کنید.')),
    desc: Joi.string().error(createHttpError.BadRequest('لطفا توضیحات محصول را وارد کنید.')),
    tags: Joi.array().min(0).max(20).error(createHttpError.BadRequest('تگ های محصول نمی تواند بیشتر از 20 تا باشد.')),
    category: Joi.string().regex(MONGOIDPATTERN).error(createHttpError.BadRequest('لطفا یک آیدی دسته بندی معتبر وارد کنید.')),
    brand: Joi.string().regex(MONGOIDPATTERN).error(createHttpError.BadRequest('لطفا یک آیدی معتبر برند وارد کنید.')),
    price: Joi.number().error(createHttpError.BadRequest('لطفا یک قیمت وارد کنید.')),
    discount: Joi.number().allow('').error(createHttpError.BadRequest('لطفا یک عدد معتبر برای تخفیف وارد کنید.')),
    fileName: Joi.string().regex(/(\.jpg|\.jpeg|\.png|\.webp|\.gif)$/).error(createHttpError.BadRequest('Please enter a valid image.')),
    uploadPath: Joi.allow(''),
    isSpecial: Joi.boolean().allow('')
})

const addInventorySchema = Joi.object({
    color: Joi.string().empty('').default(null),
    size: Joi.string().empty('').default(null),
    quantity: Joi.number().error(createHttpError.BadRequest('لطفا موجودی را وارد کنید.'))
})

module.exports = {
    addProductSchema,
    addInventorySchema
}