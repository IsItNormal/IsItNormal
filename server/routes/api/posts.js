var express = require("express");
var router = express.Router();
var upload = require("multer")({dest: "uploads/"});

router.get('/', function(req, res){
  res.send("All posts");
});

router.get('/:id', function(req, res){
  var id = req.params.id;
  res.end(id);
});

router.post('/', upload.single('picture'), function(req, res){
  console.log(req.file);
  res.send(req.file);

});
module.exports = router;
