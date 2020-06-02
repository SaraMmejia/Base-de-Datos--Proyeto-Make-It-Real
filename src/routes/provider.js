const router = require('express').Router();
const providerController = require('../controllers/provider.controller.js');
<<<<<<< HEAD
const { auth } = require ('../utils/middlewares.js');
=======
const { auth } = require('../utils/middlewares.js');
>>>>>>> 4dbe76f02d21aaedf7ca94206e2ef134c79e96cc

router.route('/all').get(providerController.all);
router.route('/create').post(providerController.create);
router.route('/show/:id').get(providerController.show);
router.route('/edit/:id').put(providerController.edit);
router.route('/destroy/:id').delete(providerController.destroy);

module.exports = router;
