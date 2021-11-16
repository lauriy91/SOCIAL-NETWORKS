// Import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema const Represent mongoose
const imageSchema = new Schema({
    user_id: String,
    likes: {
        type: Number, default:0
    },
    user_name: String,
    image_url: String,
    timestamp: { type: Date, default: Date.now },
},{
    // colletion where its host, takes date
    collection: 'images',
    versionKey: false,
    timestamps: true,
});

imageSchema.methods.setImage = function setImage(filename) {
    this.image_url = `${filename}`
}
const modelImage = mongoose.model('Images', imageSchema);

// Export under this model
module.exports = modelImage;