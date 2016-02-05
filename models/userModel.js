var mongoose  = require('mongoose'),
    bcrypt    = require('bcrypt-nodejs');

var apptModel = require('./../models/apptModel.js');

  var userSchema = new mongoose.Schema({
      username: {type: String, required:true, unique:true},
      password: {type: String, required: true },
      firstname: {type: String},
      lastname: {type: String},
      email: {type: String},
      age: {type: Number},
      appts: {
        selectedappts: [{type: mongoose.Schema.Types.ObjectId, ref: "Appt"}],
        pastappts: [{type: mongoose.Schema.Types.ObjectId, ref: "Appt"}],
        schedappts: [{type: mongoose.Schema.Types.ObjectId, ref: "Appt"}]
      },
      payment: {
          nameoncard: {type:String},
          cardnumber: {type:Number, min: 16, max: 16},
          cvvnumber: {type:Number, min: 3, max: 3},
          expiremonth: {type:String},
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
      rateDiscount: {type: Number}
  });

  userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  userSchema.methods.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
  };

  module.exports = mongoose.model('User', userSchema);
