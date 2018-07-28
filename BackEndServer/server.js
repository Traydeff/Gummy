var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

var PORT = 7070;

server.listen(PORT);

console.log("listening on " + PORT);

app.get("/", function(req, res){
    console.log(" / request");
    res.send("hello there");
});