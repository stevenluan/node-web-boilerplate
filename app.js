'use strict';

//define dependent libraries
var express = require('express'),
	engines = require('consolidate'),
	path = require('path'),
	methods = require('methods'),
	fs = require('fs'),
    configure = require('./configure');

//initialize express instance
var app = express();

//configure the express app
configure(app);

//load routes from js files in folder './routes'
var routes_path = path.join(__dirname, 'routes');
var routes_files = fs.readdirSync(routes_path);

routes_files.forEach(function(file) {
    require(path.join(routes_path, file))(app);
});

module.exports = app;


