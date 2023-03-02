const productsM = require('../models/products.mdl');

const allProducts = async () => {
    const allStock = await productsM.allProducts();
    return allStock;
};

const productsById = async (id) => {
    const productId = await productsM.productsById(id);
    return productId;
};

module.exports = { allProducts, productsById };