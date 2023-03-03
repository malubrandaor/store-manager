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

const productUpdate = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const newId = await productS.productUpdate(id, name);
    if (!newId) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(newId);
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await productS.deleteProduct(id);
    if (type) return res.status(404).json({ message });
    return res.status(204).end();
};

module.exports = { allProducts, productsById, addProduct, productUpdate, deleteProduct };