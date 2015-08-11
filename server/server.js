var express = require("express");
var bodyParser = require("body-parser");
var postRoutes = require("./routes/api/posts");
var db = require("./db/connection");
var app = express();

/* Middlewares */
app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/uploads"));
app.use(bodyParser.json());

app.use("/api/posts", postRoutes);

app.listen(3000, function(){
  console.log('Connected to Mongo')
  console.log("Normalcy on port 3000");
});
