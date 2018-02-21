'use strict';

const ObjectId = require('mongoose').Types.ObjectId;
const Hotel = require('./models');

/**
 * [devolver todos los hoteles]
 * @param  {[type]}  req [description]
 * @param  {[type]}  res [description]
 * @return {[array]}     [listado de hotels]
 */
let getHotels = (req, res) => {
  Hotel.find({})
    .then( hotels =>{
        return res.status(200).send(hotels);
    })
    .catch( err =>{
        return res.status(400).send(err);
    })
};


/**
 * [traer hotel por id]
 * @param  {[type]}   req [description]
 * @param  {[type]}   res [description]
 * @return {[object]}     [hotel]
 */
let getHotel = (req, res) => {
 Hotel.findOne({id: req.params.id })
     .then( hotel =>{
         return res.status(200).send(hotel);
     })
     .catch( err =>{
         return res.status(400).send(err);
     });
};

/**
 * [borrar hotel por id]
 * @param  {[type]}  req [description]
 * @param  {[type]}  res [description]
 * @return {[array]}     [listado de hotels]
 */
let deleteHotel = (req, res) => {
  Hotel.remove({id: req.params.id })
      .then( hotel =>{
          return res.status(200).send(hotel);
      })
      .catch( err =>{
          return res.status(400).send(err);
      });
};


/**
 * [guardado de un hotel]
 * @param  {[type]}  req  [description]
 * @param  {[type]}  res  [description]
 * @return {[strint]}     [resultado de la operacion]
 */
let saveHotel = (req, res) => {
    let hotel = new Hotel(req.body);
    hotel.save(req.body)
    .then( hotel =>{
        return res.status(200).send(hotel);
    })
    .catch( err =>{
        return res.status(400).send(err);
    })
};

/**
 * [edicion de hotel por id]
 * @param  {[type]}  req [description]
 * @param  {[type]}  res [description]
 * @return {[strint]}     [resultado de la operacion]
 */
let updateHotel = (req, res) => {
    Hotel.findOneAndUpdate({id: req.params.id }, {$set:req.body}, {  new: true })
    .then( hotel =>{
        return res.status(200).send(hotel);
    })
    .catch( err =>{
        return res.status(400).send(err);
    })
};


module.exports = {
  getHotels,
  getHotel,
  deleteHotel,
  saveHotel,
  updateHotel
};
