const { UserModel } = require("../../../models/user.model");
const { hashPassword, generateAuthToken } = require("../../../utils/functions");
const { authSchema } = require("../../validators/auth/auth.schema");
const Controller = require("../controller");
const bcrypt = require('bcrypt')

class AuthController extends Controller {
    async register(req, res, next) {
        try {
            const { email, password } = await authSchema.validateAsync(req.body)
            const user = await UserModel.findOne({ email })
            if(user) {
                return res.status(409).json({
                    status: 'error',
                    message: 'کاربری با ایمیل وارد شده قبلا ثبت نام کرده است.'
                })
            }
            const hashedPassword = await hashPassword(password)
            const newUser = await UserModel.create({ email, password: hashedPassword })
            if(!newUser) {
                return res.status(500).json({
                    status: 'error',
                    message: 'خطای سرور'
                })
            }
            return res.status(201).json({
                status: 'success',
                message: 'عضویت شما با موفقیت انجام شد.'
            }) 
        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = await authSchema.validateAsync(req.body)
            const user = await UserModel.findOne({ email })
            if(!user) {
                return res.status(401).json({
                    status: 'error',
                    message: 'ایمیل یا رمز عبور شما اشتباه است.'
                })
            }

            const validatePassword = await bcrypt.compare(password, user.password)
            if(!validatePassword) {
                return res.status(401).json({
                    status: 'error',
                    message: 'ایمیل یا رمز عبور شما اشتباه است.'
                })
            }

            const token = generateAuthToken(user._id)
            return res.status(200).json({
                status: 'success',
                data: {
                    email: user.email,
                    token
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    AuthController: new AuthController()
}