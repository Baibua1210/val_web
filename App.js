var express = require('express');
var path = require('path');
var app = express();
var route = require('./route');

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(route);

app.use(express.static("assets/img"));

app.listen(app.get("port"));