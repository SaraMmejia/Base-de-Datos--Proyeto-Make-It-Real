const { Schema, model, models } = require('mongoose');

const productListSchema = new Schema({
  productImage: {
    type: String,
    required: [true, 'Imágen es un campo requerido']
  },
  productName:  {
    type: String,
    required: [true, 'Nombre del producto es un campo requerido']
  },
  productDescription:  {
    type: String,
    required: [true, 'Descripción de producto es un campo requerido']
  }},
  {
  timestamps: true,
  });

const ProductList = model('ProductList', productListSchema);

module.exports = ProductList;
