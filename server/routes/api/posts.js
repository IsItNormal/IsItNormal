var express = require("express");
var router = express.Router();
var upload = require("multer")({dest: "uploads/"});
var Post = require("../../db/models/post.js");

/**
 * Return 20 most recent posts
 */
router.get('/', function(req, res){
  Post.find({}).sort('-date').limit(20).exec(function(err, posts){
    if(err){
      res.send(500);
    } else {
      res.json(posts);
    }
  });
});

/**
 * Return a particular post
 */
router.get('/:id', function(req, res){
  Post.findOne({__id: req.params.id}, function(err, post){
    if(err){
      res.setStatus(500);
    } else {
      res.json(post);
    }
  });
});

/**
 * Handle post uploading
 */
router.post('/', upload.single('picture'), function(req, res){
  var post = new Post({
    image_path: req.file.filename,
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

/**
 * Update vote counts on posts.
 * Internally increment because input from outside world
 * cannot be trusted
 */
router.put('/:id', function(req, res){
  Post.findOne({__id: req.params.id}, function(err, post){
    if(err){
      res.sendStatus(500);
    } else {
      if(req.body.vote === 'normal_vote'){
        post.normal_vote += 1;
      } else if(req.body.vote === 'not_normal_vote'){
        post.not_normal_vote += 1;
      } else {
        res.sendStatus(500);
      }
    }
  });
});
module.exports = router;
