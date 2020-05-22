require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const initDatabase = require('./src/db.js');
const providerController = require('./src/controllers/provider.controller.js');
const providerRouter = require('./src/routes/provider.js');


initDatabase();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/providers', providerRouter);



app.listen(8080, () => console.log(`App running on http://localhost:8080`));
