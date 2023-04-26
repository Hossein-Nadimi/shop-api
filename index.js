const Application = new require('./app/server')
const DB_URI = 'mongodb://0.0.0.0/shop-api'
require('dotenv').config()
new Application(3000, DB_URI)