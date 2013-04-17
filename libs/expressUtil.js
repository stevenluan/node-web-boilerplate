'use strict';

//util method for expressjs content negotiation.
module.exports.send = function send(req, res, template, data){
	//Performs content-negotiation on the request Accept header field when present
	//see http://expressjs.com/api.html#res.format
	res.format({
		json: function(){
			res.json(data);
		},
		html: function(){
			res.render(template, data);
		}
	});
};