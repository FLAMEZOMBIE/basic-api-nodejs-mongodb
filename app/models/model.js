const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nomor: {
        type: String,
        required: true
    }
})
const User = mongoose.model("user", userSchema);
module.exports = User;