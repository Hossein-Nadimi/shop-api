const multer = require('multer')
const fs = require('fs')
const path = require('path')
const createHttpError = require('http-errors')

function createUploadPath(req) {
    const date = new Date()
    const year = date.getFullYear().toString()
    const month = (date.getMonth() + 1).toString()
    const day = date.getDate().toString()
    const directory = path.join(__dirname, '..', '..', 'public', 'uploads', 'images', year, month, day)
    req.body.uploadPath = path.join('uploads', 'images', year, month, day)
    fs.mkdirSync(directory, { recursive: true })
    return directory
}

const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file?.originalname) {
            const uploadPath = createUploadPath(req)
            return cb(null, uploadPath)
        }
        cb(null, null)
    },
    filename: (req, file, cb) => {
        if(file?.originalname) {
            const ext = path.extname(file.originalname)
            const fileName = String(new Date().getTime() + ext)
            req.body.fileName = fileName
            return cb(null, fileName)
        }
        cb(null, null)
    }
})


function imageFilter(req, file, cb) {
    const allowedMimeTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']
    if(allowedMimeTypes.includes(file.mimetype)) return cb(null, true)
    return cb(createHttpError.BadRequest('فرمت فایل وارد شده معتبر نمی باشد.'))
}


const maxImageSize = 1000 * 1000 // 1MB
const uploadImage = multer({ storage: imageStorage, imageFilter, limits: { fileSize: maxImageSize } })

module.exports = {
    uploadImage
}