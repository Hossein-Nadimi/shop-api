const { adminRouter } = require('./admin/admin.routes')
const { homeRouter } = require('./api/index.routes')
const { authRouter } = require('./auth/auth.routes')

const router = require('express').Router()

router.use('/admin', adminRouter)
router.use('/auth', authRouter)
router.use('/', homeRouter)

module.exports = {
    allRoutes: router
}