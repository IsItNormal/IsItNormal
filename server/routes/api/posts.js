var express = require("express");
var router = express.Router();
var upload = require("multer")({dest: "uploads/"});
var Post = require("../../db/models/post.js");

router.get('/', function(req, res){
  Post.find({}).limit(20).sort('-date').exec(function(err, posts){
    if(err){
      res.send(500);
    } else {
      console.log(posts);
      res.json(posts);
    }
  });
});

router.get('/:id', function(req, res){
  var id = req.params.id;
  res.end(id);
});

router.post('/', upload.single('picture'), function(req, res){
  console.log("AYO WE GOT AN UPLOAD");
  var post = new Post({
    image_path: __dirname +'/' + req.file.destination + req.file.filename,
    description: req.body.description,
    meta: {
      normal_votes: 0,
      not_normal_votes: 0,
    }
  });

  console.log(post);
  post.save(function(err) {
    if(err){
      console.log("PROLEMS");
      res.send(500);
    } else {
      console.log(post);
      res.send(200);
    }
  });

});
module.exports = router;
