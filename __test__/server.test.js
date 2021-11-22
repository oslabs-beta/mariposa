// it('Testing to see if Jest works', () => {
//   expect(1).toBe(1)
// })

const request = require('supertest');

const server = 'http://localhost:3000';
console.log('test')
/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe('Route integration', () => {
  describe('/', () => { // where is this endpoint in index.js??
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  describe('/savePreset', () => {
    describe('POST', () => {
      it('responds with 200 status', () => {
        return request(server)
          .post('/savePreset')
          .send({
            newPreset: [
              "Jennifer's New Playlist",
              'what_are_those',
              'fbi',
              'what_are_those',
              'what_are_those',
              'what_are_those',
              'what_are_those',
              'fbi',
              'what_are_those',
              'what_are_those',
              'what_are_those',
              'what_are_those',
              'what_are_those',
              'test'
            ]
          })
          .expect(200);
      });
    });

    describe('/login', () => {
      describe('POST', () => {
        it('responds with 200 status', () => {
          return request(server)
            .post('/login')
            .send({ userInfo: { username: 'test', password: 'testtest' } })
            .expect(200);
        });
      });
    });
  });
});