const Product = require("../Models/product")

const getProduct = async(req, res) => {
    const viewProduct = await Product.find()

    if(!viewProduct){
        res.send("Product not found")
    }
    res.send(viewProduct)
}

const createProduct = async(req, res) => {
    const createdProduct = new Product(req.body)
    await createdProduct.save()
    res.send(createdProduct)
}

const updateProduct = async(req, res) => {
        const ProductId = req.params.id;
        const updateData = req.body; 
        const updatedProduct = await Product.findByIdAndUpdate(ProductId, updateData); //, { new: true, runValidators: true }

        if (!updatedProduct) {
            return res.status(404).send("Product not present");
        }
    res.send("Product has been updated");
    // res.send(updatedProduct);
}

const deleteProduct = async(req, res) => {
    const ProductId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(ProductId);
    if (!deletedProduct) {
        return res.send("Product not present");
    }
    res.send("Product deleted");
}

module.exports = {getProduct, createProduct, updateProduct, deleteProduct};