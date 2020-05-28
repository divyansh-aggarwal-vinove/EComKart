const express = require('express');
const router = express.Router();
const cartController = require('../controllers/carts');

//adding products from dashboard to the cart
// router.post('/', cartController.create);

//displaying all the products added in cart
router.get('/:id', cartController.findOne);


router.post('/:id', cartController.updateCart);

router.post('/update-item-qty/:id', cartController.updateCartItemQty);

router.post('/delete-item/:id', cartController.deleteCartItem);

router.delete('/:id', cartController.delete);

module.exports = router;