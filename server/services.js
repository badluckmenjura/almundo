const mongoose = require('mongoose');
const db = mongoose.connection;

/**
 * [devolver todos los hoteles]
 * @param  {[type]}  req [description]
 * @param  {[type]}  res [description]
 * @return {[array]}     [listado de hotels]
 */
let getHotels = (req, res) => {
  db.collection('hotels').find({}).toArray((err, docs) => {
    if(err) {
      throw err;
      return res.status(400).send(err);
    }
    if (docs.length < 1) {
      let hotels = [];
      return res.status(200).send(hotels);
    }else{
      return res.status(200).send(docs);
    }
  });
};



/**
 * [traer hotel por id]
 * @param  {[type]}   req [description]
 * @param  {[type]}   res [description]
 * @return {[object]}     [hotel]
 */
let getHotel = (req, res) => {
  db.collection('hotels').findOne({id: req.params.id },(err, doc) => {
      if(err) {
        throw err;
        return res.status(400).send(err);
      }
      res.status(200).send(doc);
    });
};

/**
 * [borrar hotel por id]
 * @param  {[type]}  req [description]
 * @param  {[type]}  res [description]
 * @return {[array]}     [listado de hotels]
 */
let deleteHotel = (req, res) => {
  db.collection('hotels').remove({id: req.params.id }, (err, result) =>{
    if(err) {
      throw err;
      return res.status(400).send(err);
    }
    res.status(200).send((result.result.ok === 1) ? {msg:'success'} : {msg:'error'});
  });
};


/**
 * [guardado de un hotel]
 * @param  {[type]}  req [description]
 * @param  {[type]}  res [description]
 * @return {[array]}     [listado de hotels]
 */
let saveHotel = (req, res) => {
  db.collection('hotels').save(req.body, (err, result) =>{
      if(err) {
        throw err;
        return res.status(400).send(err);
      }
    res.status(200).send((result.result.ok === 1) ? {msg:'success'} : {msg:'error'});
  });
};
module.exports = {
  getHotels,
  getHotel,
  deleteHotel,
  saveHotel
};
