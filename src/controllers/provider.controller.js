const Provider = require('../models/provider.model.js');
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

//Controladores : CRUD

module.exports = {
  all(req, res) {
    Provider
      .find()
      .then((provider) => res.status(200).json(provider))
      .catch((error) => res.status(500).json(error));
  },
  show(req, res){
    const { id }=req.params;
    Provider
     .findById(id)
     .then((provider) => res.status(200).json(provider))
     .catch((error) => res.status(400).json(error))
  },
  edit(req, res){
    const { id } = req.params;
    const data = req.body;
    const options = {
      new: true,
      useFindAndModify: false
    };
    Provider
      .findByIdAndUpdate(id, data, options)
      .then((provider) => res.status(200).json(provider))
      .catch((error) => res.status(400).json(error))
  },
  async signup(req, res) {

    try {
      const data = req.body;
      const password = await bcrypt.hash(data.password, 8);
      const provider = await Provider.create({ data });

      // // const token = jwt.sign(
      // //   { id: provider._id },
      // //   'holacarebola',
      // //   { expiresIn: 60 * 60 * 24 * 365 }
      // //   );
      //
      // res.status(200).json({ token });
    }
    catch (error) {
      console.log(error);
    }
  },

}
