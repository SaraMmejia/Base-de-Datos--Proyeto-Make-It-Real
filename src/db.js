//simepre es el mismo código:
const mongoose = require('mongoose');


const options = {
  useNewUrlParser: true,
  useUnifiedTopology:true
}
mongoose.connect('mongodb://localhost:27017/db-proyect', options);

const { connection } = mongoose;

connection.once('open', () => console.log('Connection established succesfully'));
connection.on('error', (err) => console.log('Something went wrong!', err));

module.exports = connection;
