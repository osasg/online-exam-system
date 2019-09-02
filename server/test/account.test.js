const assert = require('assert');
const request = require('supertest');
const status = require('http-status');
const bcrypt = require('bcrypt');
require('should');

const SERVER_ADDRESS = '127.0.0.1:3001';
const agent = request.agent(SERVER_ADDRESS);

const account = {
  username: 'dat',
  password: '123456',
  email: 'quangdat2000.pham@gmail.com'
};

let account_id;

describe('Account test', () => {
  before(async () => {
    const res = await agent.post('/api/auth/signup')
      .send(account);

    agent.set('Authorization', `Bearer ${res.body.token}`);
  });

  it('should create an account', done => {
    agent.post('/api/accounts/')
      .send(account)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'ACCOUNT_CREATED');
        assert.notEqual(res.body.account, null);
        account_id = res.body.account._id;
        done();
      });
  });

  it('should find account by _id', done => {
    agent.get(`/api/accounts/${account_id}`)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'ACCOUNT_FOUND');
        assert.notEqual(res.body.account, null);
        done();
      });
  });

  it('should update account', done => {
    agent.put(`/api/accounts/${account_id}`)
      .send({ _id: account._id, firstname: 'new-firstname', lastname: 'new-lastname' })
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'ACCOUNT_UPDATED');
        done();
      });
  });

  it('should delete delete account by _id', done => {
    agent.delete(`/api/accounts/${account_id}`)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'ACCOUNT_REMOVED');
        done();
      });
  });
});
