var express = require('express');
var app = express();
var path = require('path')
//setting middleware
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
  });
  app.get("/index.js", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.js"));
  });
  app.get("/styles.css", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "styles.css"));
  });
var server = app.listen(80);