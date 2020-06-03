const ProductList = require ('../models/productList.model.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
  async list(req, res) {
    try{
      const productList = await ProductList.find()
      res.status(200).json(productList);
      }
    catch (error) {
      console.log(error);
      }
    },

    async create(req, res) {
      try {
        const data = req.body;
        const productList = await ProductList.create(data);
        res.status(200).json(productList);
        }
      catch (error) {
        console.log(error);
      }
    },
    async show(req, res){

      try{
         const { id } = req.params;
         const productList = await ProductList.findById(id)
         res.status(200).json(productList);
        }
      catch (error) {
         console.log(error);
       }
    },
    async edit(req, res){
      try{
        const { id } = req.params;
        const data = req.body;
        const options = {
          new: true,
          useFindAndModify: false
          };
        const productList = await ProductList.findByIdAndUpdate(id, data, options)
        res.status(200).json(productList);
        }
      catch (error) {
        console.log(error);
        }
    },
    async destroy(req, res) {
      try{
        const { id } = req.params;
        const productList = await ProductList.findByIdAndDelete(id)
        res.status(200).json(productList);
        }
      catch (error) {
          console.log(error);
        }
      }
  };
