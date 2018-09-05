const mongoose = require('../mongodb');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const user = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  password: String,
  active: {type: Boolean, default: true},
  date: { type: Date, default: Date.now }
});

const userModel = mongoose.model('user', user);

module.exports = userModel;