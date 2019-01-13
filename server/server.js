var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 9900;

app.use(express.static('app'));

app.listen(port, function(err) {
    console.log('Running server on port ' + port);
})