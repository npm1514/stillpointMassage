var userModel = require('./../models/userModel.js');

  module.exports = {
    create: function(req, res) {
      var user = new userModel(req.body);
      user.save(function(err, result){
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    },
    read: function(req, res) {
      userModel
      .find(req.query)
      .exec(function (err, result) {
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    },
    update: function(req, res){
      userModel
      .findByIdAndUpdate(req.params.id, req.body, function(err, result){
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    },
    delete: function(req, res){
      userModel
      .findByIdAndRemove(req.params.id, req.body, function(err, result){
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    }
  };
