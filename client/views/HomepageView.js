var HomepageView = Backbone.View.extend({ 
  id: 'home',
  initialize: function(){ 
    this.selectedView = new SelectedView({model: this.collection.at(0)});
    this.scaleView = new ScaleView({model: this.collection.at(0)});
    this.imageView = new ImageView({model: this.collection.at(0)});
    
    this.collection.on('voted', this.renderScale, this)  //listener on selected view for click

    this.render();
    this.renderSelected();
  },

  render: function(){   
    this.$el.append(this.imageView.$el)
  },

  renderSelected: function(){ 
    this.$el.append(this.selectedView.$el)
    console.log('renderSelected triggered')
  },

  renderScale: function(){ 
    this.$el.append(this.scaleView.$el)
    console.log('renderScale triggered')
  }

});
