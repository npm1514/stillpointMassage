var apptModel = require('./../models/apptModel.js');

  module.exports = {
    create: function(req, res) {
      var appt = new apptModel(req.body);
      appt.save(function(err, result){
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    },
    read: function(req, res) {
      apptModel
      .find(req.query)
      .exec(function (err, result) {
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    },
    update: function(req, res){
      apptModel
      .findByIdAndUpdate(req.params.id, req.body, function(err, result){
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    },
    delete: function(req, res){
      apptModel
      .findByIdAndRemove(req.params.id, req.body, function(err, result){
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    }
  };
