const { default: mongoose } = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String },
    parent: { type: mongoose.Types.ObjectId, ref: 'category', default: null },
    desc: { type: String }
}, { timestamps: true, id: false, toJSON: { virtuals: true, versionKey: false } })

categorySchema.index({ name: 'text' })

categorySchema.virtual('children', {
    ref: 'category',
    localField: '_id',
    foreignField: 'parent'
})

module.exports = {
    CategoryModel: mongoose.model('category', categorySchema)
}