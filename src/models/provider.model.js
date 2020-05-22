const { Schema, model, models } = require('mongoose');

//En providerSchema van los elementos de la base de datos que para el provider me voy a traer
//y allí se incluye la información que voy a permitir ingresar desde el frontEnd a la base de datos.
// si del front me envían más datos de los aquí especificados auntomáticamente se ignoran y no ingresan.

//Validación del E-mail
const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const uniqueEmail = {
  validator(value) {
    return models.Provider.findOne({ providerEmail: value })
      .then(provider => !provider)
      .catch(() => false);
  },
  message: 'El email ya existe'
}

const providerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Nombre es un campo requerido']
  },
  lastname:  {
    type: String,
    required: [true, 'Apellido es un campo requerido']
  },
  company:  {
    type: String,
    required: [true, 'Compañía es un campo requerido']
  },
  nit: {
    type: Number,
    required: [true, 'NIT es un campo requerido']
  },
  providerEmail:  {
    type: String,
    required: [true, 'Email es un campo requerido'],
    match: [emailTest, 'Correo invalido'],
    validate: [
      uniqueEmail
    ]
  },
  password: {
    type: String,
    required: [true, 'Contraseña es un campo requerido']
  }
}, {
  timestamps: true,
});

const Provider = model('Provider', providerSchema);//Modelo

module.exports = Provider;
