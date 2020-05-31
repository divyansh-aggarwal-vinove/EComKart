const express = require('express');
const router = express.Router();
const cartController = require('../controllers/carts');
const checkAuth=require('../lib/check-auth');

//adding products from dashboard to the cart
router.post('/',checkAuth, cartController.create);

//displaying all the products added in cart
router.get('/:id', checkAuth ,cartController.findOne);

//adding a product with a specific id
router.post('/:id', checkAuth ,cartController.updateCart);

router.post('/update-item-qty/:id', checkAuth ,cartController.updateCartItemQty);

router.post('/delete-item/:id', checkAuth ,cartController.deleteCartItem);

router.delete('/:id', checkAuth , cartController.delete);

module.exports = router;