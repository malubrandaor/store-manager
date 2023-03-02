const connections = require('./connection');

const allProductsM = async () => {
    const [result] = await connections.execute('SELECT * FROM products;');
    return result;
};
const productsByIdM = async (id) => {
    const [[result]] = await connections.execute('SELECT * FROM products WHERE id =?;', [id]);
    return result;
};

module.exports = { allProductsM, productsByIdM };