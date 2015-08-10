var mongoose = require('mongoose');

var uri = 'mongodb://localhost/isitnormal';

var db = mongoose.connect(uri);

module.exports = db;
