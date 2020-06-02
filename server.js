require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const initDatabase = require("./src/db.js");
const clientController = require("./src/controllers/client.controller.js");
const providerController = require("./src/controllers/provider.controller.js");
const branchController = require("./src/controllers/branch.controller.js");
const loginController = require("./src/controllers/login.controller.js");
const productListController = require("./src/controllers/productList.controller.js");
const clientRouter = require("./src/routes/client.js");
const providerRouter = require("./src/routes/provider.js");
const branchRouter = require("./src/routes/branch.js");
const loginRouter = require("./src/routes/login.js");
const productListRouter = require("./src/routes/product.js");
const { auth } = require("./src/utils/middlewares.js");

initDatabase();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", loginRouter);
app.use("/products", productListRouter);
app.use("/clients", clientRouter);
app.use("/providers", providerRouter);
app.use("/providers/:id/branch", branchRouter);

app.listen(8080, () => console.log(`App running on http://localhost:8080`));
