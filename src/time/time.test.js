const app = require('../server');
const supertest = require('supertest');
const req = supertest(app);

describe('Minutes to Seconds', () => {
  it('should return the conversion from the minutes to seconds', async done => {
    const res = await req.get('/time/m2s/2');

    expect(res.status).toBe(200);
    expect(res.body.seconds).toBe(120);
    done();
  })
});
