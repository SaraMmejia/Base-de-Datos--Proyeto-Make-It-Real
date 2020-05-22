
const express = require('express');
const cors = require('cors');
const initDatabase = require('./src/db.js');
const providerController = require('./src/controllers/provider.controller.js');


initDatabase();
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req,res) => providerController);

//Esto se pasa a cada una de las rutas para acceder al controlador
app.get('/providers',providerController.all);
app.post('/providers',providerController.signup);
app.get('/providers/:id',providerController.show);
app.put('/providers/:id',providerController.edit);



app.listen(8080, () => console.log(`App running on http://localhost:8080`));
