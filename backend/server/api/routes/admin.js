//adding users and products
const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');
const UserController=require('../controllers/users');
// const checkAuth = require('../lib/check-auth');


//Products Routes
router.get('/products', productController.findAll);

router.post('/products',productController.getProduct);

router.post('/products/create', productController.create);

router.get('/products/:id', productController.findOne);

router.post('/products/:id', productController.update);

router.delete('/products/:id', productController.delete);


//User Routes
router.post("/user/signup", UserController.user_signup);

router.get("/user/:userId",   UserController.curr_User);

router.delete("/user/:userId",   UserController.user_delete);

router.put("/user/:userId",   UserController.user_edit);

module.exports = router;