const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose - paginate');
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
userSchema.plugin(mongoosePaginate)
const User = mongoose.model("user", userSchema);
module.exports = User;