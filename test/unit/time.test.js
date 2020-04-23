const app = require('../../src/server');
const supertest = require('supertest');
const req = supertest(app);

describe('Time Controller', () => {
  describe('Minutes to Seconds', () => {
    test('2 minutes', async done => {
      const res = await req.get('/time/m2s/2');
      expect(res.body.seconds).toBe(120);
      done();
    });

    test('3 minutes', async done => {
      const res = await req.get('/time/m2s/3');
      expect(res.body.seconds).toBe(180);
      done();
    });

    test('5 minutes', async done => {
      const res = await req.get('/time/m2s/5');
      expect(res.body.seconds).toBe(300);
      done();
    });
  });
});
