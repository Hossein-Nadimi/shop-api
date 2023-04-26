const createHttpError = require('http-errors')
const Joi = require('joi')
const { MONGOIDPATTERN } = require('../../../utils/constants')

const addCategorySchema = Joi.object({
    name: Joi.string().min(3).max(30).error(createHttpError.BadRequest('نام دسته بندی باید حداقل 3 کاراکتر و حداکثر 30 کاراکتر باشد.')),
    parent: Joi.string().empty('').pattern(MONGOIDPATTERN).error(createHttpError.BadRequest('لطفا یک آی دی معتبر وارد کنید.')),
    desc: Joi.string().allow('').min(3).max(100).error(createHttpError.BadRequest('توضیحات دسته بندی باید حداقل 3 کاراکتر و حداکثر 100 کاراکتر باشد.'))
})

const updateCategorySchema = Joi.object({
    name: Joi.string().allow('').min(3).max(30).error(createHttpError.BadRequest('نام دسته بندی باید حداقل 3 کاراکتر و حداکثر 30 کاراکتر باشد.')),
    desc: Joi.string().allow('').min(3).max(100).error(createHttpError.BadRequest('توضیحات دسته بندی باید حداقل 3 کاراکتر و حداکثر 100 کاراکتر باشد.'))
})

module.exports = {
    addCategorySchema,
    updateCategorySchema
}