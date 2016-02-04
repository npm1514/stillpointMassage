var mongoose  = require('mongoose'),
    bcrypt    = require('bcrypt-nodejs');

var apptModel = require('./../models/apptModel.js');

  var userSchema = new mongoose.Schema({
      username: {type: String, required:true, unique:true},
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

  userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  userSchema.methods.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
  };

  module.exports = mongoose.model('User', userSchema);
