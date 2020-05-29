//authentication of users and admin
const express = require('express');
var router = express.Router();
const passport = require('passport');
const bodyParser=require('body-parser');
var user=require('../models/users');
const homecontroller = require('../controllers/home');
const authenticate=require('../authenticate');

router.use(bodyParser.json());
//authentication of admin login 
router.post('/admin/login',homecontroller.alogin);

router.post('/user/login', passport.authenticate('local'), (req, res) => {

    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
  });
  

module.exports = router;