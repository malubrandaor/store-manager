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
const productUpdate = async (id, name) => { 
    await connections.execute(
    'UPDATE StoreManager.products SET name = (?) WHERE id = (?);',
    [name, id],
    );
    const retorno = await productsById(id);
    return retorno; 
};
const deleteProduct = async (id) => {
   const [deletedId] = await connections.execute (
        'DELETE FROM StoreManager.products WHERE id = ?;',
        [id],
    );
    return deletedId;
};

module.exports = { allProducts, productsById, addProduct, productUpdate, deleteProduct };