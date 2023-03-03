const connections = require('./connection');

const allSales = async () => {
    const [result] = await connections.execute(
        `SELECT id AS saleId, date, product_id AS productId, 
        quantity FROM sales
        INNER JOIN sales_products
        ON sales.id = sales_products.sale_id;`,
    );
    return result;
};

const salesById = async (id) => {
    const [result] = await connections.execute(
        `SELECT date, product_id AS productId, 
        quantity FROM StoreManager.sales AS sm
        INNER JOIN StoreManager.sales_products AS sp
        ON sp.sale_id = sm.id
        WHERE sm.id = (?);`,
        [id],
    );
    return result;
};

module.exports = { allSales, salesById };