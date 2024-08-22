const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /', () => {
    it('should return Hello, Jenkins!', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.text).to.equal('Hello, Jenkins!');
                done();
            });
    });
});

