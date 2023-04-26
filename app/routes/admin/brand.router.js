const { BrandController } = require('../../http/controllers/admin/brand.controller')

const router = require('express').Router()

router.get('/', BrandController.getAllBrands)
router.post('/add', BrandController.addBrand)
router.patch('/update/:id', BrandController.updateBrandById)
router.delete('/remove/:id', BrandController.removeBrandById)
router.get('/:id', BrandController.getBrandById)

module.exports = {
    brandRouter: router
}