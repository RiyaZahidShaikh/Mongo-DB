const express = require('express');
const router = express.Router();

const {getProduct, createProduct, updateProduct, deleteProduct} = require("../Controllers/productController");

router.get('/product', getProduct);

router.post('/createproduct', createProduct);

router.put("/updateproduct/:id", updateProduct);

router.delete("/deleteproduct/:id", deleteProduct);

module.exports = router;