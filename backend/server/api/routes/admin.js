//adding users and products
const express = require('express');
const router = express.Router();
const passport = require('passport');
const bodyParser=require('body-parser');
var user=require('../models/users');
const productController = require('../controllers/products');
const authenticate=require('../authenticate');


router.use(bodyParser.json());

router.get('/products', productController.findAll);
//gives all the products present in the cart with total price
router.post('/products', productController.getProduct);

router.post('/products/create', productController.create);

router.get('/products/:id', productController.findOne);

router.post('/products/:id', productController.update);

router.delete('/products/:id', productController.delete);


router.get("/users",function(req,res,next){
  res.send('response with a resource');
});

router.post('/users/signup', (req, res, next) => {
    User.register(new User({username: req.body.username}), 
      req.body.password, (err, user) => {
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
      }
      else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      }
    });
  });



module.exports = router;