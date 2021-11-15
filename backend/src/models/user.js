// Import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema const Represent mongoose
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    avatar: {
        type: String,
        default: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'}
},{
    // colletion where its host
    collection: 'users'
});

userSchema.methods.setAvatar = function setAvatar(filename) {
    this.avatar = `${filename}`
}
const modelUser = mongoose.model('User', userSchema)

// Export under this model
module.exports = modelUser;