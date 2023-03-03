const express = require('express');
const salesController = require('../controllers/sales.cntrll');

const salesRoutes = express.Router();

salesRoutes.get('/', salesController.allSales);
salesRoutes.get('/:id', salesController.salesById);

module.exports = salesRoutes;