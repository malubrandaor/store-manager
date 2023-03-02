const express = require('express');
const productController = require('../controllers/products.cntrll');

const routes = express.Router();

routes.get('/', productController.allProducts);
routes.get('/:id', productController.productsById);
routes.post('/', productController.addProduct);
module.exports = routes;