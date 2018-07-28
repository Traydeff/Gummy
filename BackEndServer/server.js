var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var sha256 = require('js-sha256');

var PORT = 7070;

// This is required in order to let client send request to the server, otherwise returns error
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

server.listen(PORT);

console.log("listening on " + PORT);

// Get "/" means what happens if we send request to index page
app.get("/", function(req, res){
    console.log("Got new request");

    var userAuthKey = sha256(generateString());
    console.log(userAuthKey);
    res.json(userAuthKey);
});

function generateString()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text + Date.now();
}