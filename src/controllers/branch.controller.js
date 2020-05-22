const Branch = require('../models/branch.model.js');

module.exports = {
  all(req, res) {
    Branch
      .find()
      .then((branch) => res.status(200).json(branch))
      .catch((error) => res.status(500).json(error));
  },
  create(req, res){
    const data = req.body;
    Branch
    .create(data)
    .then((branch) => res.status(200).json(branch))
    .catch((error) => res.status(400).json(error))
  },
  show(req, res){
    const { id }=req.params;
    Branch
     .findById(id)
     .then((branch) => res.status(200).json(branch))
     .catch((error) => res.status(400).json(error))
  },
  edit(req, res){
    const { id } = req.params;
    const data = req.body;
    const options = {
      new: true,
      useFindAndModify: false
    };
    Branch
      .findByIdAndUpdate(id, data, options)
      .then((branch) => res.status(200).json(branch))
      .catch((error) => res.status(400).json(error))
  },
  destroy(req, res){
    const { id } = req.params;
    Branch
      .findByIdAndDelete(id)
      .then((branch) => res.status(200).json(branch))
      .catch((error) => res.status(400).json(error));
  }
}
