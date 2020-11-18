const express = require('express');
const router = express.Router();
const userController = require('../controller/user');


router.post('/login', userController.login)
router.post('/resetpassword', userController.resetPassword)

module.exports = router