const connections = require('./connection');

const allProducts = async () => {
    const [result] = await connections.execute('SELECT * FROM StoreManager.products;');
    return result;
};
const productsById = async (id) => {
    const [[result]] = await connections.execute(
        'SELECT * FROM StoreManager.products WHERE id =?;',
         [id],
        );
    return result;
};

module.exports = { allProducts, productsById };