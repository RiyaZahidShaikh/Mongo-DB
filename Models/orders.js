const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    _id: Number,
    User_id: Number,
    Product_id: Number,
    Quantity: Number,
    order_date: Date,
    order_status: String,
    total_amount: Number,
    delivery_status: String,
    delivery_date: Date,
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;