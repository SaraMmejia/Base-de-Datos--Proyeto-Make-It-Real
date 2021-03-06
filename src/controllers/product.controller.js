const Product = require('../models/product.model');

module.exports = {
  async all(req, res) {
    try {
      const product = await Product.find();
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  },
  async create(req, res) {
    try {
      const data = req.body;
      console.log(req.body);
      const product = await Product.create(data);
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(400).json(product);
    } catch (error) {
      console.log(error);
    }
  },
  async edit(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const options = {
        new: true,
        useFindAndModify: false,
      };
      const product = await Product.findByIdAndUpdate(id, data, options);
      res.status(400).json(product);
    } catch (error) {
      console.log(error);
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      res.status(400).json(product);
    } catch (error) {
      console.log(error);
    }
  },
};
