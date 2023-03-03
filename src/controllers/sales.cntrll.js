const salesS = require('../services/sales.srvc');

const allSales = async (req, res) => {
    const sales = await salesS.allSales();
    return res.status(200).json(sales);
};

const salesById = async (req, res) => {
    const { id } = req.params;
    const sales = await salesS.salesById(id);
    if (sales.length === 0) {
        return res.status(404).json({ message: 'Sale not found' });
    } return res.status(200).json(sales);
};

module.exports = { allSales, salesById };