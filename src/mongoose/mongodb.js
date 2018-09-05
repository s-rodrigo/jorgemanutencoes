const mongoose = require('mongoose');

const user = 's.rodrigo';
const password = '110893rod';
 
mongoose.connect('mongodb://'+user+':'+password+'@ds245772.mlab.com:45772/manutencao', {useNewUrlParser: true});

module.exports = mongoose;