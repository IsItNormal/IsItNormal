var SelectedView = Backbone.View.extend({ 
  initialize: function(){ 
    this.model.on('change', this.render, this)
    this.render();
  },

  template:  _.template('<button id="not">WAF</button><button id="normal">Normal</button>'),

  render: function(){ 
    this.$el.append(this.template(this.model.attributes))
  },

  events:{ 
    'click button' : 'eventTrigger'
  },

  setPhoto: function(photo){ 
    this.model = photo;
    this.render();
  }, 

  eventTrigger: function(){ 
    this.model.voted();
    this.remove();
  }


});