var mongoose = require('mongoose');

  var apptModel = new mongoose.Schema({
      date: {type: Number, required:true},
      time: {type: Number, required:true},
      therapist: {type: String, required: true},
      apptLength:{type: Number, required: true},
      cost:{type: Number, required: true}
  });

  module.exports = mongoose.model('Appt', apptModel);
