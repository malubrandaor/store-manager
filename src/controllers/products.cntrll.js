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

const addProduct = async (req, res) => {
    const updateProducts = req.body;
    const addedProduct = await productS.addProduct(updateProducts);
    res.status(201).json(addedProduct);
};

module.exports = { allProducts, productsById, addProduct };