var express = require('express');
var path = require('path');
var app = express();
var route = require('./route');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views"))
});

app.set("port", process.env.PORT || 3000);
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(route);

app.listen(app.get("port"));