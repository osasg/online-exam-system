const assert = require('assert');
const request = require('supertest');
const status = require('http-status');
const bcrypt = require('bcrypt');
require('should');

const database = require('../config/database/mongo.config');
let db;

const SERVER_ADDRESS = '127.0.0.1:3001';
const agent = request.agent(SERVER_ADDRESS);

const subject = {
  name: 'test subject',
  description: 'this is a test',
  exam_ids: []
};

let subject_id;

describe('subject test', () => {
  before(async () => {
    const res = await agent.post('/api/auth/signup')
      .send({
        username: 'teacher',
        password: 'teacher',
        email: 'teacher@gmail.com'
      });
    
    db = await database.connect();
    await db.collection('accounts').updateOne({ username: 'teacher' }, { $push: { roles: 'teacher' } });

    agent.set('Authorization', `Bearer ${res.body.token}`);
  });

  after(() => {
    db.collection('accounts').drop();
  })

  it('should create a subject', done => {
    agent.post('/api/subjects/')
      .send(subject)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'SUBJECT_CREATED');
        assert.notEqual(res.body.subject, null);
        subject_id = res.body.subject._id;
        done();
      });
  });

  it('should find subject by _id', done => {
    agent.get(`/api/subjects/${subject_id}`)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'SUBJECT_FOUND');
        assert.notEqual(res.body.subject, null);
        done();
      });
  });

  it('should update subject', done => {
    agent.put(`/api/subjects/${subject_id}`)
      .send({
        name: 'update name',
        descriptions: 'update description'
      })
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'SUBJECT_UPDATED');
        done();
      });
  });

  it('should delete delete subject by _id', done => {
    agent.delete(`/api/subjects/${subject_id}`)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'SUBJECT_REMOVED');
        done();
      });
  });
});
