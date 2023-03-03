const salesM = require('../models/sales.mdl');

const allSales = async () => {
    const sales = await salesM.allSales();
    return sales;
};
const salesById = async (id) => {
    const salesId = await salesM.salesById(id);
    return salesId;
};

module.exports = { allSales, salesById };