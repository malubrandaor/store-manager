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
const addProduct = async (name) => {
    const [{ newId }] = await connections.execute(
        'INSERT INTO StoreManager.products (name) VALUES (?);',
        [name],
    );
    return newId;
};

module.exports = { allProducts, productsById, addProduct };