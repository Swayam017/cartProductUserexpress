const getCartForUser = (req, res) => {
    const userId = req.params.userId;
    res.send(`Fetching cart for user with ID: ${userId}`);
};

const addProductToCart = (req, res) => {
    const userId = req.params.userId;
    res.send(`Adding product to cart for user with ID: ${userId}`);
};

const removeProductFromCart = (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;
    res.send(`Removing product with ID: ${productId} from cart of user ${userId}`);
};

module.exports = {
    getCartForUser,
    addProductToCart,
    removeProductFromCart
};
