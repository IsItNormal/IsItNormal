var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Post = new Schema({
  image_path:  String,
  description: String,
  location:   String,
  meta: {
    normal_votes: Number,
    not_normal_notes:  Number
  },
  created_at: Date
});

Post.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

module.exports = Post;