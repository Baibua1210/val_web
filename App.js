var express = require('express');
var path = require('path');
var app = express();
var route = require('./route');
var favicon = require('serve-favicon');

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname +'/views'));
app.use(favicon(__dirname + '/VestALife.ico'));
app.use(route);

app.listen(app.get("port"));