const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // age:Number,
    // mobileNumber: Number,
    // address: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;