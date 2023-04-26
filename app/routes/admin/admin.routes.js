const { brandRouter } = require('./brand.router')
const { categoryRouter } = require('./category.router')
const { productRouter } = require('./product.router')
const { slideRouter } = require('./slide.router')
const { userRouter } = require('./user.router')

const router = require('express').Router()

/**
 * @swagger
 * tags:
 *  name: Admin
 *  description: Admin management panel
*/

router.use('/brands', brandRouter)
router.use('/categories', categoryRouter)
router.use('/products', productRouter)
router.use('/slides', slideRouter)
router.use('/users', userRouter)

module.exports = {
    adminRouter: router
}