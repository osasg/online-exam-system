const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const accountRoute = require('./account.route');
const examRoute = require('./exam.route')
const subjectRoute = require('./subject.route');
const examHistoryRoute = require('./exam-history.route');

const { authMiddleware: auth } = require('../middlewares');

const author = require('../../../author.json');

router.get([ '/author', '/about', '/api/' ], (req, res) => {
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

router.use('/api/subjects',
  auth.requireAuth,
  subjectRoute
);

router.use('/api/exam-histories',
  auth.requireAuth,
  examHistoryRoute
);

module.exports = router;
