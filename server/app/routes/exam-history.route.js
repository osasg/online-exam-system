const express = require('express');
const router = express.Router();

const { examHistoryController: controller } = require('../controllers');
const { authMiddleware: auth } = require('../middlewares');

router.get('/',
  auth.requireRole([ 'admin', 'teacher' ]),
  controller.findAll
);

router.get('/enrolled-exams', controller.findEnrolledExams);

router.get('/ended-exams', controller.findEndedExams);

router.patch('/start/:_id', controller.start);

router.patch('/end/:_id', controller.end);

router.get('/:_id', controller.findById);

router.put('/:_id', controller.update);

router.patch('/:_id', controller.updateSingleAnswer);

router.delete('/:_id', controller.remove);

module.exports = router;
