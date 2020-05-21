
const express = require('express');
const cors = require('cors');
const connection = require('./src/db.js');
const providerController = require('./src/controllers/provider.controller.js');

conection();
const app = express();
app.use(cors());
app.use(express.json());


function providerController( req, res ){

}
app.get('/', (req,res) => providerController);

//Esto se pasa a cada una de las rutas para acceder al controlador
//providerController.create
app.post('/providers',providerController.create);
app.get('/providers',providerController.show);
app.put('/providers',providerController.edit);



app.listen(8080, () => console.log(`App running on http://localhost:8080`));
