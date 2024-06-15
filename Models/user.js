const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    email: String,
    password: String,
    age:Number,
    mobileNumber: Number,
    address: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;