const request = require('supertest');
const app = require('../server/server.js');

// const server = 'http://localhost:3000';

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

  // describe('/api/login/google', () => {
  //   describe('GET', () => {
  //     it('redirects user to home page', () => {
  //       return request(app).get('/').expect(200);
  //     });
  //   });
  //   })

  describe('api/info', () => {
    describe('GET', () => {
      it('responds with 401 status and application/json content type', () => {
        return request(app)
          .get('/api/info')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
});
