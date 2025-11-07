const getAllProducts = (req, res) => {
    res.send("Fetching all products");
};

const addProduct = (req, res) => {
    res.send("Adding a new product");
};

const getProductById = (req, res) => {
    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`);
};

const updateProduct = (req, res) => {
    const id = req.params.id;
    res.send(`Updating product with ID: ${id}`);
};

const deleteProduct = (req, res) => {
    const id = req.params.id;
    res.send(`Deleting product with ID: ${id}`);
};

module.exports = {
    getAllProducts,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct
};
