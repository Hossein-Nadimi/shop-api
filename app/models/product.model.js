const { default: mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
    comment: { type: String, required: true },
    parent: { type: mongoose.Types.ObjectId, ref: 'comment' }
}, { timestamps: true })

const inventorySchema = new mongoose.Schema({
    color: { type: String },
    size: { type: String },
    quantity: { type: Number }
})

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String },
    text: { type: String, required: true },
    images: { type: [String], required: true, default: [] },
    desc: { type: String, required: true },
    category: { type: [mongoose.Types.ObjectId], ref: 'category', required: true },
    brand: { type: mongoose.Types.ObjectId, ref: 'brand', required: true },
    inventory: { type: [inventorySchema], default: [] },
    price: { type: Number, required: true },
    discount: { type: Number, required: false },
    isSpecial: { type: Boolean, default: false },
    tags: { type: [String], default: [] },
    bookmarks: { type: [mongoose.Types.ObjectId], default: [] },
    comments: { type: [commentSchema], default: [] },
}, { timestamps: true, id: false, toJSON: { virtuals: true, versionKey: false } })


productSchema.index({ name: 'text' })

// productSchema.virtual('imagesUrl').get(function() {
//     return this.images?.map(image => `${process.env.BASE_URL}:${process.env.APPLICATION_PORT}/${image}`)
// })

productSchema.virtual('totalInventory').get(function() {
    return this.inventory.reduce((total, variant) => {
        total += variant.quantity
        return total
    }, 0)
})

module.exports = {
    ProductModel: mongoose.model('product', productSchema)
}