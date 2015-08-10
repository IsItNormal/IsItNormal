var express = require("express");
var router = express.Router();
var upload = require("multer")({dest: "uploads/"});
var Post = require("../db/modesl/post.js");

router.get('/', function(req, res){
  Post.find({}).limit(20).sort('-date').exec(function(err, posts){
    if(err){
      res.send(500);
    } else {
      res.json(posts);
    }
  });
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
