//adding users and products
const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

router.get('/products', productController.findAll);

// router.post('/products', productController.getProduct);

router.post('/products/create', productController.create);

router.get('/products/:id', productController.findOne);

router.post('/products/:id', productController.update);

router.delete('/products/:id', productController.delete);

module.exports = router;