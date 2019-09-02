const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const accountRoute = require('./account.route');
const examRoute = require('./exam.route')
const subjectRoute = require('./subject.route');
const examHistoryRoute = require('./exam-history.route');

const author = require('../../../author.json');

router.get('/', (req, res) => {
  res.send({
    success: true,
    description: 'Welcome to online-exam system',
    repository: 'https://github.com/quangdatpham/online-exam-system',
    author
  });
});

router.use('/api/auth', authRoute);

router.use('/api/accounts', accountRoute);

router.use('/api/exams', examRoute);

router.use('/api/subjects', subjectRoute);

router.use('/api/exam-histories', examHistoryRoute);

module.exports = router;
