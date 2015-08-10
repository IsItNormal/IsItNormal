var express = require("express");
var router = express.Router();
var upload = require("multer")({dest: "uploads/"});
var Post = require("../../db/models/post.js");

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
  var post = new Post({
    image_path: req.destination,
    description: req.params.description,
    meta: {
      normal_votes: 0,
      not_normal_votes: 0
    }
  });

  post.save(function(err) {
    if(err){
      res.send(500);
    } else {
      res.send(200);
    }
  });

});
module.exports = router;
