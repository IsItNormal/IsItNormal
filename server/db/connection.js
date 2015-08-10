var mongoose = require('mongoose');

var uri = 'mongodb://localhost/isitnormal';

var db = mongoose.createConnection(uri);

module.exports = db;