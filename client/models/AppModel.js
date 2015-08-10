var AppModel = Backbone.Model.extend({ 
  initialize: function(params){ 
    this.set('currentPhoto', params.library.at(0))
    console.log(params.library)
    debugger;

    params.library.on('switch', function(photo){ 
      this.set('currentPhoto', photo)
    }, this);
  }


})