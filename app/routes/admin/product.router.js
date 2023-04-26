const { ProductController } = require('../../http/controllers/admin/product.controller')
const { stringToArray } = require('../../http/middlewares/stringToArray')
const { uploadImage } = require('../../utils/uploader')

const router = require('express').Router()

router.get('/', ProductController.getAllProducts)
router.post('/add', uploadImage.array('images', 10), stringToArray('tags'), ProductController.addProduct)
router.patch('/:id/inventory', ProductController.addInventoryToProduct)
router.patch('/update/:id', uploadImage.array('images', 10), stringToArray('tags'), ProductController.updateProductById)
router.delete('/remove/:id', ProductController.removeProductById)
router.get('/:id', ProductController.getProductById)

module.exports = {
    productRouter: router
}