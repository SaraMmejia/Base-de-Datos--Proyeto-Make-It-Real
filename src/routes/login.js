const router = require('express').Router();
const loginController = require('../controllers/login.controller.js');
<<<<<<< HEAD
const { auth } = require ('../utils/middlewares.js');
=======
const { auth } = require('../utils/middlewares.js');
>>>>>>> 4dbe76f02d21aaedf7ca94206e2ef134c79e96cc

router.route('/signin').post(loginController.signin);

module.exports = router;
