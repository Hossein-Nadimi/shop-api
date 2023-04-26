const path = require('path')
const cors = require('cors')
const createHttpError = require('http-errors')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const { allRoutes } = require('./routes/routes')

module.exports = class Application {
    #app = express()
    #DB_URI
    #PORT
    constructor(PORT, DB_URI) {
        this.#PORT = PORT
        this.#DB_URI = DB_URI
        this.configDatabase()
        this.configApplication()
        this.createServer()
        this.createRoutes()
        this.errorHandler()
    }

    configDatabase() {
        mongoose.set('strictQuery', true)
        mongoose.connect(this.#DB_URI, (error) => {
            if(!error) return console.log('Connected to MongoDB!')
            console.log(error.message)
        })
    }

    configApplication() {
        this.#app.use(cors())
        this.#app.use(morgan('dev'))
        this.#app.use(express.json())
        this.#app.use(express.urlencoded({ extended: true }))
        this.#app.use(express.static(path.join(__dirname, '..', 'public')))
        this.#app.use('/docs', swaggerUI.serve, swaggerUI.setup(
            swaggerJsDoc({
                swaggerDefinition: {
                    openapi: '3.0.0',
                    info: {
                        title: 'Shop Api',
                        version: '1.0.0',
                        description: 'Shop api',
                        contact: {
                            name: 'Shop api',
                            url: 'https://github.com/Hossein-Nadimi',
                            email: 'hossein.nadimi.dev@gmail.com'
                        }
                    },
                    servers: [
                        { url: `${process.env.BASE_URL}:${process.env.APPLICATION_PORT}` }
                    ],
                    components: {
                        securitySchemes: {
                            BearerAuth: {
                                type: 'http',
                                scheme: 'bearer',
                                bearerFormat: 'JWT'
                            }
                        }
                    },
                    security: [{ BearerAuth: [] }]
                },
                apis: ['./app/routes/**/*.js']
            }),
            { explorer: true }
        ))
    }

    createServer() {
        const http = require('http')
        http.createServer(this.#app).listen(this.#PORT, () => {
            console.log(`Server is running on > http://localhost:${this.#PORT}`)
        })
    }

    createRoutes() {
        this.#app.use(allRoutes)
    }

    errorHandler() {
        // 404 handler
        this.#app.use((req, res, next) => {
            next(createHttpError.NotFound('این صفحه یافت نشد.'))
        })

        // 500 handler
        this.#app.use((error, req, res, next) => {
            const serverError = createHttpError.InternalServerError('خطای سرور.')
            const statusCode = error?.statusCode || serverError.statusCode
            const message = error?.message || serverError.message
            return res.status(statusCode).json({
                errors: {
                    status: 'error',
                    message
                }
            })
        })
    }
}