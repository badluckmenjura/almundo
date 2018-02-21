const mongoose = require('mongoose');
const app = require('./server/express');
const http = require('http');

// se establecen variables de entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || '4071';
const db = process.env.MONGO || 'mongodb://localhost:27017/almundo';

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const server = http.createServer(app)

mongoose.Promise = global.Promise;

/**
 * [se realiza coneccion a al base de datos]
 * @type  db {[mongodb]} ruta de bace de datos
 */
mongoose.connect(db)
  .then(() => {
      console.log('La conexión a MongoDB se ha realizado correctamente!!');
      server.listen(port, () => {
        console.log(`La aplicación corre en el puerto : ${port}`);
      });

  })
  .catch(err => console.log(err));
