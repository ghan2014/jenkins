var request = require('supertest');
var app = require('../app.js');

describe('GET /', function(){
	it('response with Hello', function(done){
		request(app).get('/').expect('Hello',done);
	});
});
