// Import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema const Represent mongoose
const commentSchema = new Schema({
    user_id: String,
    user_name: String,
    comment: String,
    image_id: String,
},{
    // colletion where its host
    collection: 'comments'
});

// Export under this model
module.exports = mongoose.model('Comment', commentSchema);