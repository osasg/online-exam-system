const assert = require('assert');
const request = require('supertest');
const status = require('http-status');
const bcrypt = require('bcrypt');
require('should');

const database = require('../config/database/mongo.config');
let db;

const SERVER_ADDRESS = '127.0.0.1:3001';
const agent = request.agent(SERVER_ADDRESS);

const examHistory = require('./mock/exam-history.mock');
const exam = require('./mock/exam.mock');

let examHistory_id;

describe('examHistory test', () => {
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

    const examDoc = await agent.post('/api/exams').send(exam);
    examHistory.exam_id = examDoc._id;
  });

  after(() => {
    db.collection('accounts').drop();
  })

  it('should create a examHistory', done => {
    agent.post('/api/exam-histories/')
      .send(examHistory)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'EXAM_HISTORY_CREATED');
        assert.notEqual(res.body.examHistory, null);
        examHistory_id = res.body.examHistory._id;
        done();
      });
  });

  it('should find examHistory by _id', done => {
    agent.get(`/api/exam-histories/${examHistory_id}`)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'EXAM_HISTORY_FOUND');
        assert.notEqual(res.body.examHistory, null);
        done();
      });
  });

  it('should update examHistory', done => {
    agent.put(`/api/exam-histories/${examHistory_id}`)
      .send({
        name: 'update name',
        descriptions: 'update description'
      })
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'EXAM_HISTORY_UPDATED');
        done();
      });
  });

  it('should delete delete examHistory by _id', done => {
    agent.delete(`/api/exam-histories/${examHistory_id}`)
      .expect('Content-type', /json/)
      .expect(status.OK)
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.body.success, true);
        assert.equal(res.body.message, 'EXAM_HISTORY_REMOVED');
        done();
      });
  });
});
