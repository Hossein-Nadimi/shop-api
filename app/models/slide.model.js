const { default: mongoose } = require("mongoose");

const slideSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true }
}, { timestamps: true, id: false, toJSON: { virtuals: true, versionKey: false } })

module.exports = {
    SlideModel: mongoose.model('slide', slideSchema)
}