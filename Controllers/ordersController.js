const Orders = require("../Models/orders");
const User = require("../Models/user");
const Product = require("../Models/product");

const getOrders = async(req, res) => {
    try {
        const viewOrders = await Orders.find();
    res.send(viewOrders)
    } catch (error) {
        res.send("Orders not found")
    }
}

const orderDetails = async(req, res) => {
    try {
        const OrdersId = req.params.id;
        const orderDetail = await Orders.findById(OrdersId)
        .populate('User')  // Make sure 'User' is a string
        .populate('Product')  // And 'Product' is a string
        .exec();  // Ensure to call exec or await the query
    
        if (!orderDetail) {
            console.log('Order not found');
            return;
        }

        console.log('Order details:', orderDetail);
} catch (error) {
    console.error("Error fetching order details:", error);
    res.status(500).send("Internal Server Error");
}
}

const createOrders = async(req, res) => {
    const createdOrders = new Orders(req.body)
    await createdOrders.save()
    res.send(createdOrders)
}

const updateOrders = async(req, res) => {
        const OrdersId = req.params.id;
        const updateData = req.body; 
        const updatedOrders = await Orders.findByIdAndUpdate(OrdersId, updateData); //, { new: true, runValidators: true }

        if (!updatedOrders) {
            return res.status(404).send("Orders not present");
        }
    res.send("Orders has been updated");
}

const deleteOrders = async(req, res) => {
    const OrdersId = req.params.id;
    const deletedOrders = await Orders.findByIdAndDelete(OrdersId);
    if (!deletedOrders) {
        return res.send("Orders not present");
    }
    res.send("Orders deleted");
}

module.exports = {getOrders, orderDetails, createOrders, updateOrders, deleteOrders};