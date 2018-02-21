'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotel = new Schema({
 
  name: {
    type: String,
    trim: true
  },
  stars: {
    type: Number
  },
  price: {
    type: Number
  },
  image: {
    type: String
  },
  amenities: {
    type: Array
  }
})


let Hotel = mongoose.model('Hotel', hotel)

module.exports = Hotel;
