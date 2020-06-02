<<<<<<< HEAD
const router = require("express").Router();
const productController = require("../controllers/product.controller.js");
const { auth } = require("../utils/middlewares.js");

router.route("/all").get(productController.all);
router.route("/create").post(productController.create);
router.route("/show/:id").get(productController.show);
router.route("/edit/:id").put(productController.edit);
router.route("/destroy/:id").delete(productController.destroy);
=======
const router = require('express').Router();
const productController = require('../controllers/product.controller.js');
const { auth } = require('../utils/middlewares.js');

router.route('/all').get(productController.all);
router.route('/create').post(productController.create);
router.route('/show/:id').get(productController.show);
router.route('/edit/:id').put(productController.edit);
router.route('/destroy/:id').delete(productController.destroy);
>>>>>>> 4dbe76f02d21aaedf7ca94206e2ef134c79e96cc

module.exports = router;
