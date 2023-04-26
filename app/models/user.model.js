const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    orders: { type: [mongoose.Types.ObjectId], ref: 'order', default: [] },
    admin: { type: Boolean, default: false },
}, { timestamps: true, id: false, toJSON: { virtuals: true, versionKey: false } })

userSchema.index({ email: 'text' })

module.exports = {
    UserModel: mongoose.model('user', userSchema)
}