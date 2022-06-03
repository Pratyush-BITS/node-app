var request = require('supertest');
var app = require('../index');

describe('node-app', () => {
    after(() => {
        require('./../index').stop();
    })

    describe('GET /', function() {
        it('respond with hello There', (done) => {
            //navigate to root and check the response is "hello There"
            request(app).get('/').expect('hello There').end(done);
        });
    });
})