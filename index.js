var express = require('express');
  var bodyParser = require('body-parser');
  var cors = require('cors');
  var mongoose = require('mongoose');


  var apptCtrl = require('./controllers/apptCtrl');
  var userCtrl = require('./controllers/userCtrl');


  var app = express();
  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static(__dirname + '/public'));

  var mongoUri = "mongodb://localhost:27017/stillpointMassage";
  mongoose.connect(mongoUri);
  mongoose.connection.once('open', function(){
    console.log("Connected to mongoDB");
  });

  app.post('/user', userCtrl.create);
  app.get('/user', userCtrl.read);
  app.put('/user/:id', userCtrl.update);
  app.delete('/user/:id', userCtrl.delete);

  app.post('/appt', apptCtrl.create);
  app.get('/appt', apptCtrl.read);
  app.put('/appt/:id', apptCtrl.update);
  app.delete('/appt/:id', apptCtrl.delete);

  app.listen(9000, function(){
    console.log("listening to 9000");
  });
