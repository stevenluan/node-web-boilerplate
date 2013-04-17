'use strict';

var app = require('./app.js')
    , Cluster = require('cluster2')
	, conf = require('config');

//initialize cluster2 instance
var cluster = new Cluster({
    port : conf.server.port,
    monPort : conf.server.monPort,
    ecv : {
    	path : conf.server.ecvPath,
    	control : conf.server.ecvControl
    }
});
cluster.listen(function(cb) {
    cb(app);
    console.log('Server started at port ' + conf.server.port);
});
