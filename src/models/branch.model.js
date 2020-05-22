const { Schema, model } = require('mongoose');

//En branchSchema van los elementos de la base de datos que para el branch me voy a traer
//y allí se incluye la información que voy a permitir ingresar desde el frontEnd a la base de datos.
// si del front me envían más datos de los aquí especificados auntomáticamente se ignoran y no ingresan.


const branchSchema = new Schema({
  branchName:  {
    type: String,
    required: [true, 'Sucursal es un campo requerido']
  },
  branchAdress:  {
    type: String,
    required: [true, 'Dirección es un campo requerido']
  }
}, {
  timestamps: true,
});

const Branch = model('Branch', branchSchema);//Modelo

module.exports = Branch;
