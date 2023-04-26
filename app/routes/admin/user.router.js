const { UserController } = require('../../http/controllers/admin/user.controller')

const router = require('express').Router()

router.get('/', UserController.getAllUsers)

module.exports = {
    userRouter: router
}