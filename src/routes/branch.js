const router = require('express').Router();
const branchController = require('../controllers/branch.controller.js');
<<<<<<< HEAD
const { auth } = require ('../utils/middlewares.js');
=======
const { auth } = require('../utils/middlewares.js');
>>>>>>> 4dbe76f02d21aaedf7ca94206e2ef134c79e96cc

router.route('/all').get(branchController.all);
router.route('/create').post(branchController.create);
router.route('/show/:id').get(branchController.show);
router.route('/edit/:id').put(branchController.edit);
router.route('/destroy/:id').delete(branchController.destroy);

module.exports = router;
