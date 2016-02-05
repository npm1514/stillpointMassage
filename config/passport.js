var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../models/userModel.js');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        console.log("USER", user);
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        console.log("ID", id);
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    passport.use('local-signup', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, username, password, done) {
        process.nextTick(function() {
          User.findOne({'username': username}, function(err, user) {
              if (err) return done(err);
              if (user) {
                if (user.validPassword(password)) {
                  console.log('worksgood');
                    return done(null, user);
                } else {
                  alert('Invalid username or password');
                    return done(null, false);
                }
              } else {
                  var newUser = new User();
                  newUser.username    = username;
                  newUser.password = newUser.generateHash(password);
                  newUser.save(function(err) {
                      if (err) throw err;
                      return done(null, newUser);
                  });
              }
          });
        });
    }));
};
