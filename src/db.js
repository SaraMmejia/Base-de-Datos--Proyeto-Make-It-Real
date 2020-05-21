const mongoose = require("mongoose");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect("mongodb://localhost:27017/database", options);

const { connection } = mongoose;


connection.once("open", () => console.log("Connection established successfuly"))
connection.on("error", () => console.log("Somthin went wrong"))


module.exports = connection;