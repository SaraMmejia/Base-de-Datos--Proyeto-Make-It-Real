// localhost:27017

const express = require ("express");
const cors = require ("cors");
const mongoose = require("mongoose");
const connection = require("./src/db.js")


const app = express ();





app.listen(8080, () => console.log("App running on http://localhost:8080"))