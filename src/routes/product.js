const router = require('express').Router();
const productListController = require('../controllers/productList.controller.js');
const { auth } = require ('../utils/middlewares.js');

router.route('/all').get(auth, productListController.list);
router.route('/create').post(productListController.create);
router.route('/show/:id').get(productListController.show);
router.route('/edit/:id').put(productListController.edit);
router.route('/destroy/:id').delete(productListController.destroy);

const loginController = require('../controllers/login.controller.js');
const { auth } = require ('../utils/middlewares.js');

router.route('/product').post(auth, productController.list);


module.exports = router;
