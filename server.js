const express = require('express');
const engines = require('consolidate');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, './dist')));


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/almundo')
  .then(() => {
      console.log('La conexión a MongoDB se ha realizado correctamente!!');
  })
  .catch(err => console.log(err));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});



app.listen(5460);
console.log("ya");
