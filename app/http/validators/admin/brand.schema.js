const createHttpError = require('http-errors')
const Joi = require('joi')

const addBrandSchema = Joi.object({
    name: Joi.string().min(3).max(30).error(createHttpError.BadRequest('نام برند باید حداقل 3 کاراکتر و حداکثر 30 کاراکتر باشد.')),
    desc: Joi.string().allow('').min(3).max(100).error(createHttpError.BadRequest('توضیحات برند باید حداقل 3 کاراکتر و حداکثر 100 کاراکتر باشد.'))
})

const updateBrandSchema = Joi.object({
    name: Joi.string().allow('').min(3).max(30).error(createHttpError.BadRequest('نام برند باید حداقل 3 کاراکتر و حداکثر 30 کاراکتر باشد.')),
    desc: Joi.string().allow('').min(3).max(100).error(createHttpError.BadRequest('توضیحات برند باید حداقل 3 کاراکتر و حداکثر 100 کاراکتر باشد.'))
})

module.exports = {
    addBrandSchema,
    updateBrandSchema
}