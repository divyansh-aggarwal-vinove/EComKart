//adding users and products
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');
const UserController = require('../controllers/users');
// const checkAuth = require('../lib/check-auth');


//Products Routes
router.get("/products", productsController.products_get_all);

router.post("/products", productsController.products_create_product);

router.get("/products/:productId", productsController.products_get_product);

router.patch("/products/:productId", productsController.products_update_product);

router.delete("/products/:productId", productsController.products_delete);


//User Routes
router.get("/user", UserController.user_all);

router.post("/user/signup", UserController.user_signup);

router.get("/user/:userId", UserController.curr_User);

router.delete("/user/:userId", UserController.user_delete);

router.put("/user/:userId", UserController.user_edit);

module.exports = router;