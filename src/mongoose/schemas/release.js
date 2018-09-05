const mongoose = require('../mongodb');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const release = new Schema({
  id: ObjectId,
  date: { type: Date, default: Date.now },
  company: String,
  price: Number,
  status: String,
  user: String,
  observation: String,
  release: []
});

const releaseModel = mongoose.model('release', release);

module.exports = releaseModel;