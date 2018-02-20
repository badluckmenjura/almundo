let express = require('express');
let app = express();
let engines = require('consolidate');
let mongoose = require('mongoose');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/dist');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/almundo')
  .then(() => {
      console.log('La conexión a MongoDB se ha realizado correctamente!!');
  })
  .catch(err => console.log(err));

  app.get('/', (req, res) => {
    res.render('index', {});
  });


app.listen(5460);
console.log("ya");
