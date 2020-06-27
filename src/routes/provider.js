const router = require('express').Router();
const providerController = require('../controllers/provider.controller.js');
const productController = require('../controllers/product.controller.js');
const { auth } = require ('../utils/middlewares.js');


router.route('/all').get(auth, providerController.all);
router.route('/create').post(providerController.create);
router.route('/show/:id').get(providerController.show);
// router.route('/products/show/:id').get(productController.show);
router.route('/edit/:id').put(providerController.edit);
router.route('/destroy/:id').delete(providerController.destroy);

module.exports = router;
