const mongoose = require('../mongodb');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const contacts = new Schema({
  id: ObjectId,
  name: String,
  gender: String,
  active: {type: Boolean, default: true},
  date: { type: Date, default: Date.now },
  company: String,
  contacts: [],
  address: {
    cep: Number,
    address: String,
    number: Number,
    district: String,
    city: String,
    state: String,
    reference: String
  },
  user: {
      name: String,
      date: { type: Date, default: Date.now }
  },
  observation: String
});

const contactModel = mongoose.model('contacts', contacts);

module.exports = contactModel;