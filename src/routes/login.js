const router = require('express').Router();
const loginController = require('../controllers/login.controller.js');
const { auth } = require('../utils/middlewares.js');

router.route('/signin').post(loginController.signin);

module.exports = router;
