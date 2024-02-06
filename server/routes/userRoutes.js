const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const check_login = require('../utils/checkLogin');


router.post('/users',userController.createUser);
router.get('/getData',check_login,userController.getUserData);

module.exports = router;