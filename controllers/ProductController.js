// Controller Layer (Handles request & response)

const productService = require("../services/productService");

const getProducts = (req, res) => {
    const result = productService.getAllProducts();
    res.send(result);
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
