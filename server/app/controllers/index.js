const authController = require('./auth.controller');
const accountController = require('./account.controller');
const examController = require('./exam.controller');
const subjectController  = require('./subject.controller');
const examHistoryController = require('./exam-history.controller');

module.exports = {
  authController,
  accountController,
  examController,
  subjectController,
  examHistoryController
}
