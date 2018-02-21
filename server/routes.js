const Services = require('./services');
const express = require('express');

let api = express.Router();

api.route('/hotels')
  .get(Services.getHotels)
  .post(Services.saveHotel)

api.route('/hotels/:id')
  .put(Services.updateHotel)
  .get(Services.getHotel)
  .delete(Services.deleteHotel)

module.exports = api;
