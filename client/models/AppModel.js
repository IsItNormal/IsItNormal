var AppModel = Backbone.Model.extend({ 
  initialize: function(params){ 
    this.set('currentPhoto', params.library.at(0))

    params.library.on('switch', function(photo){ 
      this.set('currentPhoto', photo)
    }, this);
  }


})