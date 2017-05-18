var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.send("Safaricom");
});

app.listen(8080, function() {
    console.log("server Js is listening on port 8080.");
});