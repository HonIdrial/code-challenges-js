const app = require('../src/core/server');
const supertest = require('supertest');
const req = supertest(app);

describe('User Controller', () => {
  describe('Is Valid Name', () => {
    test("H. Wells", async done => {
      const res = await req.get('/user/is-valid-name/H. Wells');
      expect(res.body.isValidName).toBe(true);
      done();
    });

    test("H. G. Wells", async done => {
      const res = await req.get('/user/is-valid-name/H. G. Wells');
      expect(res.body.isValidName).toBe(true);
      done();
    });

    test("Herbert G. Wells", async done => {
      const res = await req.get('/user/is-valid-name/Herbert G. Wells');
      expect(res.body.isValidName).toBe(true);
      done();
    });

    test("Herbert", async done => {
      const res = await req.get('/user/is-valid-name/Herbert');
      expect(res.body.isValidName).toBe(false);
      done();
    });

    test("h. Wells", async done => {
      const res = await req.get('/user/is-valid-name/h. Wells');
      expect(res.body.isValidName).toBe(false);
      done();
    });

    test("H Wells", async done => {
      const res = await req.get('/user/is-valid-name/H Wells');
      expect(res.body.isValidName).toBe(false);
      done();
    });

    test("H. George Wells", async done => {
      const res = await req.get('/user/is-valid-name/H. George Wells');
      expect(res.body.isValidName).toBe(false);
      done();
    });

    test("H. George W.", async done => {
      const res = await req.get('/user/is-valid-name/H. George W.');
      expect(res.body.isValidName).toBe(false);
      done();
    });

    test("Herb. George Wells", async done => {
      const res = await req.get('/user/is-valid-name/Herb. George Wells');
      expect(res.body.isValidName).toBe(false);
      done();
    });
  });
});
