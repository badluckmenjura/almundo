const mongoose = require('mongoose');
const app = require('./server/express');
const http = require('http');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || '4071';
const db = process.env.MONGO;

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const server = http.createServer(app)

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/almundo')
  .then(() => {
      console.log('La conexión a MongoDB se ha realizado correctamente!!');
      server.listen(port, () => {
        console.log(`La aplicación corre en el puerto : ${port}`);
      });

  })
  .catch(err => console.log(err));
