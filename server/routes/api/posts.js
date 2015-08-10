var express = require("express");
var router = express.Router();
var upload = require("multer")({dest: "uploads/"});
var db = require("../../db/connection");
var Post = require("../../db/models/post.js");

router.get('/', function(req, res){
  Post.find({}).sort('-date').limit(20).exec(function(err, posts){
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
  var post = new Post({
    image_path: __dirname +'/' + req.file.destination + req.file.filename,
    description: req.body.description,
    meta: {
      normal_votes: 0,
      not_normal_votes: 0,
    }
  });

  post.save(function(err) {
    if(err){
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });

});
module.exports = router;
