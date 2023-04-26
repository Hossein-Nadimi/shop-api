const { CategoryController } = require('../../http/controllers/admin/category.controller')
const router = require('express').Router()

router.get('/', CategoryController.getAllCategories)
router.get('/parents', CategoryController.getParentCategories)
router.post('/add', CategoryController.addCategory)
router.patch('/update/:id', CategoryController.updateCategoryById)
router.delete('/remove/:id', CategoryController.removeCategoryById)
router.get('/:id', CategoryController.getCategoryById)

module.exports = {
    categoryRouter: router
}