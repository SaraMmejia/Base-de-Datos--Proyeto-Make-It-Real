const { Schema, model } = require('mongoose');

//En providerSchema van los elementos de la base de datos que para el provider me voy a traer
//y allí se incluye la información que voy a permitir ingresar desde el frontEnd a la base de datos.
// si del front me envían más datos de los aquí especificados auntomáticamente se ignoran y no ingresan.
const providerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname:  {
    type: String,
    required: true
  },
  providerEmail:  {
    type: String,
    required: true
  },
  nit: {
    type: Number,
    required: true
  },
  company:  {
    type: String,
    required: true
  },
  branchName:  {
    type: String,
    required: true
  },
  branchAdress:  {
    type: String,
    required: true
  },
  username:  {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

const Provider = model('Provider', providerSchema);//Modelo

module.exports = Provider;
