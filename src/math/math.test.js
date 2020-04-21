const app = require('../server');
const supertest = require('supertest');
const req = supertest(app);

describe('Math Controller', () => {
  describe('Get Next Number', () => {
    test('next of 0', async done => {
      const res = await req.get('/math/next/0');

      expect(res.body.next).toBe(1);
      done();
    });

    test('next of 9', async done => {
      const res = await req.get('/math/next/9');

      expect(res.body.next).toBe(10);
      done();
    });

    test('next of -3', async done => {
      const res = await req.get('/math/next/-3');

      expect(res.body.next).toBe(-2);
      done();
    });
  });

  describe('Sum Two Numbers', () => {
    test('3 + 2', async done => {
      const res = await req.get('/math/sum2nums/3/2');

      expect(res.body.sum).toBe(5);
      done();
    });

    test('-3 + -6', async done => {
      const res = await req.get('/math/sum2nums/-3/-6');

      expect(res.body.sum).toBe(-9);
      done();
    });

    test('7 + 3', async done => {
      const res = await req.get('/math/sum2nums/7/3');

      expect(res.body.sum).toBe(10);
      done();
    });
  });
});
