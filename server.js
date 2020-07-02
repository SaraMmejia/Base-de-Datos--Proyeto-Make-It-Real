require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const initDatabase = require('./src/db.js');
const clientRouter = require('./src/routes/client.js');
const providerRouter = require('./src/routes/provider.js');
const branchRouter = require('./src/routes/branch.js');
const loginRouter = require('./src/routes/login.js');
const productRouter = require('./src/routes/product.js');
const searchRouter = require('./src/routes/search.js');


const port = process.env.PORT;

initDatabase();
const app = express();
app.use(cors());
app.use(express.json());






app.use('/', loginRouter);
app.use('/clients', clientRouter);
app.use('/clients/search', searchRouter);
app.use('/providers/search', searchRouter);
app.use('/providers', providerRouter);
app.use('/products', productRouter);
app.use('/providers/:id/branch', branchRouter);

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
