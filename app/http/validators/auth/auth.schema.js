const createHttpError = require('http-errors')
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

const complexityOptions = {
    min: 8,
    max: 15,
    lowerCase: 1,
    numeric: 1,
}

const authSchema = Joi.object({
    email: Joi.string().email().error(createHttpError.BadRequest('لطفا یک ایمیل معتبر وارد کنید.')),
    password: passwordComplexity(complexityOptions).required().error(createHttpError.BadRequest('پسورد باید حداقل 8 کاراکتر و شامل یک حرف کوچک و یک عدد باشد.')),
})

module.exports = {
    authSchema
}