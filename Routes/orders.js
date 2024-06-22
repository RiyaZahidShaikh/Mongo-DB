const express = require('express');
const router = express.Router();

const {getOrders, orderDetails, createOrders, updateOrders, deleteOrders} = require("../Controllers/ordersController");

router.get('/orders', getOrders);

router.get("/orderdetails/:id", orderDetails)

router.post('/createorders', createOrders);

router.put("/updateorders/:id", updateOrders);

router.delete("/deleteorders/:id", deleteOrders);

module.exports = router;