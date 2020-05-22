const Provider = require('../models/provider.model.js');

//Controladores : CRUD

module.exports = {
  all(req, res) {
    Provider
      .find()
      .then((provider) => res.status(200).json(provider))
      .catch((error) => res.status(500).json(error));
  },
  create(req, res){
    const data = req.body;
    Provider
    .create(data)
    .then((provider) => res.status(200).json(provider))
    .catch((error) => res.status(400).json(error))
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
}
