const Busboy = require('busboy');
const cloudinary = require('cloudinary').v2;

//Configuracion para conectarse a nuestra cuenta
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = {
  formData(req, res, next) {
    const busboy = new Busboy({ headers: req.headers });
    req.body = {};//Agregamos todos los campos que nos llegan a reg.Body

    //Trae el Campo y Nombre del campo "Iterador"
    busboy.on('field', (key, val) => {
      req.body[key] = val;
    });

    //Los campos corresponden al data.append del app.js
    busboy.on('file', (fieldname, file, filename) => {
      const stream = cloudinary.uploader.upload_stream(
        { upload_preset: process.env.CLOUDINARY_PRESET },
        (error, result) => {
          if(error) {
            throw Error('Algo salio mal');
          }
          //Llegó bien
          req.body[fieldname] = result;
          next();
        }
      );

      //Métodos
      file.on('data', (data) => {
        stream.write(data);
      });
      file.on('end', () => {
        stream.end();
      });
    });

    req.pipe(busboy);
  },
  uploadImage(req, res, next) {

  }
}
