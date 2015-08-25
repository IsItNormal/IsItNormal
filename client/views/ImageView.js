var ImageView = Backbone.View.extend({ 
  id: 'image',
  template: _.template('<h2><%- description %></h2><img src= <%=image_path%> ></img>'),

  initialize: function(){ 
    this.render();
  },

  render: function(){ 
    this.$el.html(this.template(this.model.attributes))
  }

})
