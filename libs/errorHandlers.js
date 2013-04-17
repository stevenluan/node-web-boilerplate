'use strict';

//dependencies
var util = require('util');

var handlersMap = {};

module.exports = function(app){
	//configure for all env
	app.configure(function () {
		app.use(function(err, req, res, next){
			var handler = handlersMap[err.name];
			if(handler){
				handler(err, req, res);
			}else{
				defaultErrorHandler(err, req, res);
			}
		});
	});
};

//Custom error for user authentication
var IsNotAuthenticated = function IsNotAuthenticated(msg, constr) {
    this.name = 'IsNotAuthenticated';
    Error.captureStackTrace(this, constr || this);
    this.message = msg || 'Error';
};
util.inherits(IsNotAuthenticated, Error);
//Custom error handler for user authentication
var UserNotAuthenticatedHandler = function(err, req, res) {
    res.send(401, err.msg);
};
//bind error handler with error
register(IsNotAuthenticated, UserNotAuthenticatedHandler);

//default error handler for unregistered error
function defaultErrorHandler(err, req, res){
	res.send(500);
}

//util function to bind error handler by its name
function register(err, handler){
	handlersMap[err.name] = handler;
}

//exports all errors as enum
module.exports.errors = {
	'IsNotAuthenticated' : IsNotAuthenticated
};
