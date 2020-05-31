//authentication of users and admin
const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home');
const UserController = require('../controllers/users');


//authentication of admin login 
router.post('/admin/login', homecontroller.alogin);

router.post("/user/login", UserController.user_login);

module.exports = router;