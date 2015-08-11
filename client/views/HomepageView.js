var HomepageView = Backbone.View.extend({ 
  initialize: function(){ 
    this.selectedView = new SelectedView({model: this.collection.at(0)});
    this.scaleView = new ScaleView({model: this.collection.at(0)});
    
    this.collection.on('voted', this.renderScale, this)  //listener on selected view for click

    this.renderSelected();
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