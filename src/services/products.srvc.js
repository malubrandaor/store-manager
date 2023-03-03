const productsM = require('../models/products.mdl');

const allProducts = async () => {
    const allStock = await productsM.allProducts();
    return allStock;
};

const productsById = async (id) => {
    const productId = await productsM.productsById(id);
    return productId;
};
const addProduct = async (name) => {
    const addedNewProduct = await productsM.allProducts();
    const id = addedNewProduct.length + 1;
    productsM.addProduct(name);
    return { name: name.name, id };
};
const productUpdate = async (id, name) => {
    const updateId = await productsM.productUpdate(id, name);
    return updateId;
};
module.exports = { allProducts, productsById, addProduct, productUpdate };