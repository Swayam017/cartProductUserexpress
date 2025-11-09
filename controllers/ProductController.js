// Controller Layer (Handles request & response)

const path = require("path");
const productService = require("../services/productService");

const getProducts = (req, res) => {
    res.sendFile(path.join(__dirname, "../view/products.html"));
};

const getProduct = (req, res) => {
    const result = productService.getProductById(req.params.id);
    res.send(result);
};

const createProduct = (req, res) => {
    const result = productService.addProduct();
    res.send(result);
};

module.exports = {
    getProducts,
    getProduct,
    createProduct
};
