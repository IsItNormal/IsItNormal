var express = require("express");
var router = express.Router();


router.get('/', function(req, res){
  res.send("All posts");
});

router.get('/:id', function(req, res){
  var id = req.params.id;
  res.end(id);
});


module.exports = router;
