var Photo = Backbone.Model.extend({ 
  switch: function(){ 
    this.trigger('switch', this)
  },

  voted: function(){ 
    this.trigger('voted', this)
  }
});