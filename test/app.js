
var app = require('../app.js')
  , http   = require('request')  
  , should  = require('should');

describe('application rest endpoint testing', function(){
  var baseUrl = 'http://localhost:8080';
  
  before(runApplication);
  

  describe('default path / testing', function(){
    var endPoint = baseUrl + '/';
    
    it(endPoint + ' accept html should return 200 status code and html',function(done){
      var option = {
        uri : endPoint,
        headers : {
          'Accept':'text/html'
        }
      };
      http.get(option,function(err, response){
        if(err){
          done(err);
        }else{
          response.statusCode.should.be.equal(200);
          response.should.be.html;
          done();
        };
      });
    });

    
    it(endPoint + ' accept json should return 200 status code and json data',function(done){
      var option = {
        uri : endPoint,
        headers : {
          'Accept':'application/json'
        }
      };
      http.get(option,function(err, response){
        if(err){
          done(err);
        }else{
          response.statusCode.should.be.equal(200);
          response.should.be.json;
          var object = JSON.parse(response.body);
          object.should.have.property('name','Node');
          done();
        };
      });
    });


    //TODO add more testing with jsdom to parse return html response
  });
});

//start application
function runApplication(done){
  app.listen(8080);
  done();
};
