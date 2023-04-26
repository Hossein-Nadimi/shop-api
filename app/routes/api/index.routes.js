const { HomeController } = require('../../http/controllers/api/home.controller')
const { verifyAuthToken } = require('../../http/middlewares/verifyAuthToken')

const router = require('express').Router()

/**
 * @swagger
 * tags:
 *  name: Index
 *  description: Index page routes
*/

router.get('/products', HomeController.getAllProducts)
router.get('/products/:slug', HomeController.getSingleProduct)

router.get('/categories/:slug', HomeController.getCategoryProducts)

router.get('/brands/:slug', HomeController.getBrandProducts)

router.get('/slider', HomeController.getSlider)

router.get('/profile', verifyAuthToken, HomeController.getUserProfile)

router.get('/payment', HomeController.paymentGateway)
router.get('/payment/verify', HomeController.verifyPayment)

module.exports = {
    homeRouter: router
}