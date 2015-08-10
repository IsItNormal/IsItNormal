var mongoose = require('mongoose');

var uri = 'mongodb://localhost/isitnormal';

var db = mongoose.createConnection(uri);

db.on('open', function(){
  console.log("Mongo Connection active.")
})

