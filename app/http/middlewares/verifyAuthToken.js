const createHttpError = require('http-errors')
const jwt = require('jsonwebtoken')
const { UserModel } = require('../../models/user.model')

async function verifyAuthToken(req, res, next) {
    try {
        const token = req?.headers?.authorization?.split(' ')[1] || ''
        if(!token) throw createHttpError.Unauthorized('لطفا وارد شوید.')
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
            try {
                if(err) throw createHttpError.Unauthorized('لطفا وارد شوید.')
                const { _id } = payload
                const user = await UserModel.findById(_id).select('-password')
                if(!user) return next(createError.Unauthorized('User not found.'))
                req.user = user
                return next()
            } catch (error) {
                next(error)
            }
        })
    } catch (error) {
        next(error)
    }

}

module.exports = {
    verifyAuthToken
}