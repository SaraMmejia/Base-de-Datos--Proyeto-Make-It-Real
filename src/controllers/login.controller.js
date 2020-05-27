const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Provider = require('../models/provider.model.js');
const Client = require('../models/client.model.js');

module.exports = {

  async signin(req, res) {
    try {

      let user;
       user = await Provider.findOne({ providerEmail: req.body.email });

      if (!user){
        user = await Client.findOne({ clientEmail: req.body.email });
      }

      if (!user){
        console.log(user);
        throw Error('El usuario no existe');
      }

      const isValid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      console.log(req.body.password)
      console.log(user.password)
      console.log(isValid)

      if(!isValid) {
        throw Error('Usuario o contraseña invalida');
      }

      const token = jwt.sign(
        { id: user._id },
        'holacarebola',
        { expiresIn: 60 * 60 * 24 * 365 }
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
};
