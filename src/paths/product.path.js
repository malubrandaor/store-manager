const express = require('express');
const productController = require('../controllers/products.cntrll');
const { nameValidation, minimumLength } = require('../middlewares/validation.products');

const routes = express.Router();

routes.get('/', productController.allProducts);
routes.get('/:id', productController.productsById);
routes.post('/', nameValidation, minimumLength, productController.addProduct);
routes.put('/:id', nameValidation, minimumLength, productController.productUpdate);
routes.delete('/:id', productController.deleteProduct);
module.exports = routes;