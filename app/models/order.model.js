const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    invoiceNumber: { type: String },
    authority: { type: String },
    paymentDate: { type: Number },
    amount: { type: Number },
    description: { type: String },
    verify: { type: Boolean, default: false },
    user: { type: mongoose.Types.ObjectId, ref: 'user' },
    cart: { type: Object, default: {} },
    refID: { type: String, default: undefined },
    cardHash: { type: String, default: undefined },
    products: { type: [mongoose.Types.ObjectId], ref: 'order', default: [] }
}, { timestamps: true, id: false, toJSON: { virtuals: true, versionKey: false } })

module.exports = {
    OrderModel: mongoose.model('order', orderSchema)
}