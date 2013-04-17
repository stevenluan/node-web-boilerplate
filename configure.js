'use strict';

//dependency
var engines = require('consolidate')
	, express = require('express')
    , path = require('path')
    , methods = require('methods')
    , errorHandlers = require('./libs/errorHandlers.js');

module.exports = function(app){
	//configure for all env
	app.configure(function () {
	    //use dust as template engine
	    app.engine('dust', engines.dust);
	    //set template location to './views'
	    app.set('views', __dirname + '/views/');
	    app.set('view engine', 'dust');
	    //view cache Enables view template compilation caching, enabled only in production by default
	    //app.set('view cache', true);
	    app.use(express.favicon());
	    app.use(express.bodyParser());
	    app.use(express.methodOverride());
		app.use(express.logger('short'));
	    //TO-DO set your application secret
	    app.use(express.cookieParser('your secret here'));
	    app.use(express.responseTime());
	    app.use(app.router);
	    //Enable this if you wish to use expressjs to host your js/css/img.
	    //app.use(express.static(__dirname + '/public'));
	});

	//bind errors with error handlers
	errorHandlers(app);


}