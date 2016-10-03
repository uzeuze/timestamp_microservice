var express = require('express');
var path = require("path");
var timestamp = require('./timestamp');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.resolve(__dirname, "public")));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', function(req,res){
  res.render("home");
});

app.get('/:query', function(req, res){
  res.json(timestamp(req.params.query));
});
app.listen(app.get('port'));
