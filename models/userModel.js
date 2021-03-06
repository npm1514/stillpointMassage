var mongoose  = require('mongoose'),
    bcrypt    = require('bcrypt-nodejs');

var apptModel = require('./../models/apptModel.js');

  var userSchema = new mongoose.Schema({
      password: {type: String, required: true },
      firstname: {type: String},
      lastname: {type: String},
      email: {type: String, required: true},
      birthdate: {type: String},
      appts: {
        selectedappt: {type: mongoose.Schema.Types.ObjectId, ref: "Appt"},
        pastappts: [{type: mongoose.Schema.Types.ObjectId, ref: "Appt"}],
        schedappts: [{type: mongoose.Schema.Types.ObjectId, ref: "Appt"}]
      },
      payment: {
          nameoncard: {type:String},
          cardnumber: {type:Number, min: 16, max: 16},
          cvvnumber: {type:Number, min: 3, max: 3},
          expiremonth: {type:Number, min: 1, max: 2},
          expireyear: {type:Number, min: 4, max: 4}
      },
      address: {type: String},
      city: {type: String},
      state: {type: String},
      zip: {type: Number},
      phone: {type: String},
      picture: {type: String},
      healthconditions: {type: String},
      provider: {type: String},
      admin: {type: Boolean, default:false},
      rateDiscount: {type: Number}
  });

  userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  userSchema.methods.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
  };

  module.exports = mongoose.model('User', userSchema);
