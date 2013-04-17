'use strict';

//dependency modules
var expressUtil = require('../libs/expressUtil');

module.exports = function(app) {

	/**
	 * render a simple hello world template
	 */
	app.get('/', function(req, res) {
		expressUtil.send(req, res, 'index', { 'name':'Node' });
		
	});
};