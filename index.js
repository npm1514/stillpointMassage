var express   = require('express'),
  bodyParser  = require('body-parser'),
  cors        = require('cors'),
  mongoose    = require('mongoose'),
  session     = require('express-session'),
  passport    = require('passport'),
  ejs         = require('ejs'),
  path        = require('path');

  var apptCtrl = require('./controllers/apptCtrl');
  var userCtrl = require('./controllers/userCtrl');

  var app = express();

  require('./config/passport.js')(passport);

  app.use(session({
    secret: 'banana',
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(express.static(__dirname + '/public'));
//comment

  app.post('/auth', passport.authenticate('local-signup'), function(req, res){
    res.send();
  });

  app.post('/user', userCtrl.create);
  app.get('/user', userCtrl.getall);
  app.get('/user/me', userCtrl.getme);
  app.get('/user/:id', userCtrl.read);
  app.put('/user/:id', userCtrl.update);
  app.delete('/user/:id', userCtrl.delete);

  app.post('/appt', apptCtrl.create);
  app.get('/appt', apptCtrl.read);
  app.put('/appt/:id', apptCtrl.update);
  app.delete('/appt/:id', apptCtrl.delete);


  var mongoUri = "mongodb://localhost:27017/stillpointMassage";
  mongoose.connect(mongoUri);
  mongoose.connection.on('error', console.error.bind(console, 'connection error'));
  mongoose.connection.once('open', function(){
    console.log("Connected to mongoDB");
  });

  app.listen(9000, function(){
    console.log("listening to 9000");
  });
