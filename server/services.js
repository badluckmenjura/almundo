const mongoose = require('mongoose');

let db = mongoose.connection;

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

let updateHotel = (req, res) => {
  db.collection('hotels').update({ _id: id(req.params.id)}, {$set:req.body}, {safe:true, multi:false}, (err, result) => {
    if(err) {
      throw err;
      console.log(1);
      return res.status(400).send(err);
    }
    res.status(200).send((result === 1) ? {msg:'success'} : {msg:'error'});
  });
};

let getHotel = (req, res) => {
  db.collection('hotels').findOne({id: id(req.params.id) }).toArray((err, doc) => {
    if(err) {
      throw err;
      console.log(1);
      return res.status(400).send(err);
    }
    res.status(200).send(doc);
    });
};

let deleteHotel = (req, res) => {
  db.collection('hotels').remove({id: id(req.params.id) }, (err, result) =>{
    if(err) {
      throw err;
      console.log(1);
      return res.status(400).send(err);
    }
    res.status(200).send((result === 1) ? {msg:'success'} : {msg:'error'});
  });
};

let saveHotel = (req, res) => {
  db.collection('hotels').save({$set:req.body}, (err, result) =>{
    if(err) {
      throw err;
      console.log(1);
      return res.status(400).send(err);
    }
    res.status(200).send((result === 1) ? {msg:'success'} : {msg:'error'});
  });
};
module.exports = {
  getHotels,
  updateHotel,
  getHotel,
  deleteHotel,
  saveHotel
};
