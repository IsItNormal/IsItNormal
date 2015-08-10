var AppView = Backbone.View.extend({ 
  initialize: function(){ 
    this.homepageView = new HomepageView({collection: this.model.get('library')});
    this.render();

    this.model.on('change:currentPhoto', function(model){ 
      this.homepageView.setPhoto(model.get('currentPhoto'))
    }, this);

  }, 

  render: function(){ 
    return this.$el.append([
      this.homepageView.$el
    ])
  }
});