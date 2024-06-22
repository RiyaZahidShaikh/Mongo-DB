const mongoose = require("mongoose");
const user = require("../Models/user");
const product = require("../Models/product");

var Schema = mongoose.Schema;  
// var ObjectId = Schema.ObjectId; 

const ordersSchema = new Schema({
    _id: Number,
    User: [{ type: Schema.Types.ObjectId, ref: user }],
    Product: [{ type: Schema.Types.ObjectId, ref: product }],
    Quantity: Number,
    order_date: Date,
    order_status: String,
    total_amount: Number,
    delivery_status: String,
    delivery_date: Date
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;