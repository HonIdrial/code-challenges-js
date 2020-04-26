const app = require('../../src/server');
const supertest = require('supertest');
const req = supertest(app);

describe('Crypto Controller', () => {
  describe('Juggle Hash', () => {
    test('three generic strings', async done => {
      const res = await req.get('/crypto/juggle-hash/string1/string2/string3');
      expect(res.body.hash).toBe('a8a687779c0b7ac2269257663c48d998ff30ef268b478f92e081e6c37a3259e7');
      done();
    });

    test('3 words', async done => {
      const res = await req.get('/crypto/juggle-hash/quick/brown/fox');
      expect(res.body.hash).toBe('798006c4a4017ae6ca82f01b6a2ac27e94073505d194bb51df85a5bf300a69e6');
      done();
    });

    test('a short sentence', async done => {
      const res = await req.get('/crypto/juggle-hash/i am not a crook');
      expect(res.body.hash).toBe('447eb9e1c13303b9d224a92df44725b527e5105df2d11a67ec2f436a4dfe4313');
      done();
    });
  });
});
