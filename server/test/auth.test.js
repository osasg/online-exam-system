/* eslint-env mocha */
const assert = require('assert');
const request = require('supertest');
const status = require('http-status');

const SERVER_ADDRESS = '127.0.0.1:3001';
const agent = request.agent(SERVER_ADDRESS);

const account = {
  username: 'quangdatpham',
  password: 'dat',
  email: 'quangdat2000.pham@gmail.com'
};

describe('Authorization', () => {

  it('Should signup successfully', done => {
    agent.post('/api/auth/signup')
      .send(account)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.notEqual(res.body.token, null);
        done();
      });
  })

  it('Should signin successfully', done => {
    agent.post('/api/auth/signin')
      .send({
        username: account.username,
        password: account.password
      })
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.notEqual(res.body.token, null);
        done();
      });
  })

  it('Should failed - wrong username - signin', done => {
    agent.post('/api/auth/signin')
      .send({ username: 'wrong' })
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, false);
        assert.equal(res.body.token, null);
        done();
      });
  })

  it('Should failed - wrong password - signin', done => {
    agent.post('/api/auth/signin')
      .send({ password: 'dat' })
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, false);
        assert.equal(res.body.token, null);
        done();
      });
  })

  it('Should failed - empty body - signin', done => {
    agent.post('/api/auth/signin')
      .send({  })
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, false);
        assert.equal(res.body.message, 'ValidationError');
        assert.equal(res.body.token, null);
        done();
      });
  })

  it('Should failed - empty body - signup', done => {
    agent.post('/api/auth/signup')
      .send({  })
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, false);
        assert.equal(res.body.token, null);
        done();
      })
  })

  it('Should require jwt token', done => {
    agent.get('/api/accounts/')
      .expect('Content-type', /json/)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.status, status.UNAUTHORIZED);
        assert.equal(res.body.success, false);
        assert.equal(res.body.profile, null);
        done();
      })
  })

  it('Should require valid jwt token', done => {
    agent.get('/api/accounts/')
      .set('Authorization', 'invalid-token')
      .expect('Content-type', /json/)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.status, status.UNAUTHORIZED);
        assert.equal(res.body.success, false);
        assert.equal(res.body.profile, null);
        done();
      })
  })
})
