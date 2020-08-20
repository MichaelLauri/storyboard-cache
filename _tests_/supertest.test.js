const request = require('supertest');
const app = require('../server/server.js');

describe('/', () => {
  describe('GET', () => {
    it('responds with 200 status and text/html content type', () => {
      return request(app)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
    });
  });
});

describe('/api', () => {
  describe('/api/login', () => {
    describe('GET', () => {
      it('redirects user to google login page', () => {
        return request(app).get('/api/login').expect(302);
      });
    });
  });
});
