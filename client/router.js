var AppRouter = Backbone.Router.extend({
  routes: {
    "/profile/:id": "profile",
    ":id": "picture",
    "*actions": "default"
  },
});

var NormalRouter = new AppRouter;

NormalRouter.on('route:picture', function(id) {
  console.log("Landing called with: ", id);
});

NormalRouter.on("route:profile", function(id) {
  console.log("Profile called with: ", id);
});

NormalRouter.on("route:default", function() {
  console.log("Default route");
});

Backbone.history.start();
