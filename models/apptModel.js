var mongoose = require('mongoose');

  var apptModel = new mongoose.Schema({
      date: {type: String, required:true},
      time: {type: String, required:true},
      therapist: {type: String, required: true},
      duration:{type: Number, required: true},
      cost:{type: Number, required: true},
      scheduled: {type: Boolean, default:false}
  });

  module.exports = mongoose.model('Appt', apptModel);
