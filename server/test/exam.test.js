const assert = require('assert');
const request = require('supertest');
const status = require('http-status');
const bcrypt = require('bcrypt');
require('should');

const database = require('../config/database/mongo.config');
let db;

const SERVER_ADDRESS = '127.0.0.1:3001';
const agent = request.agent(SERVER_ADDRESS);

const exam = require('./mock/exam.mock');

let exam_id;

describe('Exam test', () => {
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

  it('should create an exam', done => {
    agent.post('/api/exams/')
      .send(exam)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'EXAM_CREATED');
        assert.notEqual(res.body.exam, null);
        exam_id = res.body.exam._id;
        done();
      });
  });

  it('should find exam by _id', done => {
    agent.get(`/api/exams/${exam_id}`)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'EXAM_FOUND');
        assert.notEqual(res.body.exam, null);
        done();
      });
  });

  it('should update exam', done => {
    agent.put(`/api/exams/${exam_id}`)
      .send({
        descriptions: 'update description',
        status: 'CLOSED'
      })
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'EXAM_UPDATED');
        done();
      });
  });

  it('should delete delete exam by _id', done => {
    agent.delete(`/api/exams/${exam_id}`)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'EXAM_REMOVED');
        done();
      });
  });
});
