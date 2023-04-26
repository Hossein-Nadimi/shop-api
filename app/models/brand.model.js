const { default: mongoose } = require('mongoose')

const brandSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String },
    desc: { type: String }
}, { timestamps: true, id: false, toJSON: { virtuals: true, versionKey: false } })

module.exports = {
    BrandModel: mongoose.model('brand', brandSchema)
}