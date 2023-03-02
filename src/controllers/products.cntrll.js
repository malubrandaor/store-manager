const productS = require('../services/products.srvc');

const allProducts = async (_req, res) => {
    const products = await productS.allProducts();
    res.status(200).json(products);
};

const productsById = async (req, res) => {
    const { id } = req.params;
    const product = await productS.productsById(id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
};

module.exports = { allProducts, productsById };