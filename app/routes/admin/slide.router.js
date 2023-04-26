const { SlideController } = require('../../http/controllers/admin/slide.controller')
const { uploadImage } = require('../../utils/uploader')

const router = require('express').Router()

router.get('/', SlideController.getAllSlides)
router.post('/add', uploadImage.single('image'), SlideController.addSlide)
router.patch('/update/:id', uploadImage.single('image'), SlideController.updateSlideById)
router.delete('/remove/:id', SlideController.removeSlideById)
router.get('/:id', SlideController.getSlideById)

module.exports = {
    slideRouter: router
}