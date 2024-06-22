const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    _id: Number,
    Product_Name: String,
    Quantity: Number,
    Availability: String,
    Category: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;