const router = require('express').Router();
const clientController = require('../controllers/client.controller.js');
<<<<<<< HEAD
const { auth } = require ('../utils/middlewares.js');

=======
const { auth } = require('../utils/middlewares.js');
>>>>>>> 4dbe76f02d21aaedf7ca94206e2ef134c79e96cc

router.route('/all').get(clientController.all);
router.route('/create').post(clientController.create);
router.route('/show/:id').get(clientController.show);
router.route('/edit/:id').put(clientController.edit);
router.route('/destroy/:id').delete(clientController.destroy);

<<<<<<< HEAD

=======
>>>>>>> 4dbe76f02d21aaedf7ca94206e2ef134c79e96cc
module.exports = router;
