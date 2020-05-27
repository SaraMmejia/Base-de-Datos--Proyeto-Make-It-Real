const { Schema, model, models } = require('mongoose');
const Provider = require('./provider.model.js');
const Client = require('./client.model.js');

const loginSchema = new Schema({
  email: String,
  password: String
}, {
  timestamps: true,
});

const Login = model('Login', loginSchema);

module.exports = Login;
