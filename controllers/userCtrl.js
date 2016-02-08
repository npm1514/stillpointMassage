var userModel = require('./../models/userModel.js');

  module.exports = {
    create: function(req, res) {
      var user = new userModel(req.body);
      user.save(function(err, result){
        if (err) {
          return res.send(err);
        }
        res.send(result);
      });
    },
    read: function(req, res) {
      userModel
      .findById(req.params.id)
      .exec(function (err, result) {
        if (err) {
          return res.send(err);

        }
        res.send(result);
      });
    },
    getme: function(req,res) {
      userModel
      .findById(req.user._id)
      .populate("appts.pastappts")
      .populate("appts.schedappts")
      .populate("appts.selectedappt")
      .exec(function (err, result) {
        if (err) {
          return res.send(err);
        }
        res.send(result);
      });
    },
    update: function(req, res){
      userModel
      .findByIdAndUpdate(req.params.id, req.body, function(err, result){
        if (err) {
          return res.send(err);
        }
        res.send(result);
      });
    },
    delete: function(req, res){
      console.log(req.user._id, req.params.id);
      if(req.user._id == req.params.id) {
        userModel
        .findByIdAndRemove(req.params.id, req.body, function(err, result){
          if (err) {
            res.send(err);
          }
          res.send(result);
        });
      }
    }
  };
