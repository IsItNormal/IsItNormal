var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  image_path:  String,
  description: String,
  location:   String,
  meta: {
    normal_votes: Number,
    not_normal_votes:  Number
  },
  created_at: Date
});

PostSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
