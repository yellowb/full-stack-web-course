'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
    path = require('path'),
    restify = require('express-restify-mongoose');

var config = require('./config');

// Bootstrap db connection
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/ita');

// Init the express application
var app = express();

// Globbing mongodb model files
config.getGlobbedFiles('./app/models/**/*.js').forEach(function(modelPath) {
    require(path.resolve(modelPath));
});

app.use('/', express.static(path.resolve('./public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Globbing express routing files
var router = express.Router();
config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
    require(path.resolve(routePath))(router);
});

// context path for mobile
restify.serve(router, mongoose.models.Trainee);

router.get('/', function(req, res, next) {
    res.render('./index');
});

app.use('/', router);

var port = 8080;
var httpServer = http.createServer(app);

// Start the app by listening on <port>
httpServer.listen(port, function() {
    // Logging initialization
    console.log('--');
    console.log('ITA_NG_APP', 'application started');
    console.log('Port:\t\t\t\t', port);
    console.log('--');
});

// Expose app
var exports;
exports = module.exports = app;
