var mongoose = require('mongoose');

var apptModel = require('./../models/apptModel.js');

  var userSchema = new mongoose.Schema({
      username: {type: String, required:true },
      password: {type: String, required: true },
      email: {type: String},
      age: {type: Number},
      pastappts: {type: mongoose.Schema.Types.ObjectId, ref: "Appt"},
      schedappts: {type: mongoose.Schema.Types.ObjectId, ref: "Appt"},
      address: {type: String},
      city: {type: String},
      state: {type: String},
      zip: {type: Number},
      phone: {type: String},
      picture: {type: String},
      healthconditions: {type: String},
      insurance: {type: Boolean},
      provider: {type: String},
      rateDiscount: {type: Number}
  });

  module.exports = mongoose.model('User', userSchema);
