var AppRouter = Backbone.Router.extend({
  routes: {
    "profile": "viewProfile",
    "profile/:id": "viewProfile",
    "upload": "handleUpload",
    ":id": "viewPicture",
    "*actions": "default"
  },
});

var NormalRouter = new AppRouter;



NormalRouter.on("route:viewProfile", function(id) {
  console.log("Profile called with: ", id);
});

NormalRouter.on("route:handleUpload", function(id) {
  console.log("Sorry, no html upload form yet!");
});

NormalRouter.on('route:viewPicture', function(id) {
  console.log("Landing called with: ", id);
});

NormalRouter.on("route:default", function(actions) {
  console.log("Default route ", actions );
});

Backbone.history.start();
