// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    age: {
        type: Number,
    },
});

module.exports = mongoose.model('User', userSchema);
