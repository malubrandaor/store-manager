const productsM = require('../models/products.mdl');

const allProductsS = async () => {
    const allStock = await productsM.allProductsS();
    return allStock;
};

const productsByIdS = async (id) => {
    const productId = await productsM.productsByIdS(id);
    return productId;
};

module.exports = { allProductsS, productsByIdS };