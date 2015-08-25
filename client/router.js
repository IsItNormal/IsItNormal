var Router = Backbone.Router.extend({

  routes: {
    '/:id':             'landing',
    '/profile/:id':      'profile',
  },
  
  landing: function(id) {
    if(id) {
      console.log("Landing called with: ",id);
    } else {
      console.log("Landing called");
    }
  },

  profile: function(id) {
    if(id) {
      console.log("Profile called with: ",id);
    } else {
      console.log("Profile called");
    }
  }
});
