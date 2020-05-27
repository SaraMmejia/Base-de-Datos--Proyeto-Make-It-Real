const Client = require ('../models/client.model.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
    all(req, res) {
        Client
          .find()
          .then((client) => res.status(200).json(client))
          .catch((error) => res.status(500).json(error));
      },
      async create(req, res) {

        try {
          const data = req.body;
          const password = await bcrypt.hash(data.password, 8);
          const client = await Client.create({clientEmail: data.clientEmail, password});

          const token = jwt.sign(
            { id: client._id },
            'holacarebola',
            { expiresIn: 60 * 60 * 24 * 365 }
            );

          res.status(200).json({ token });
        }
        catch (error) {
          console.log(error);
        }
      },
      show(req, res){
        const { id }=req.params;
        Client
         .findById(id)
         .then((client) => res.status(200).json(client))
         .catch((error) => res.status(400).json(error))
      },
      edit(req, res){
        const { id } = req.params;
        const data = req.body;
        const options = {
          new: true,
          useFindAndModify: false
        };
        Client
          .findByIdAndUpdate(id, data, options)
          .then((client) => res.status(200).json(client))
          .catch((error) => res.status(400).json(error))
      },
      destroy(req, res) {
        const { id } = req.params;

        Client
          .findByIdAndDelete(id)
          .then((client) => res.status(200).json(client))
          .catch((error) => res.status(400).json(error));
      }
};
