const express = require('express');
const router = express.Router();

const { examController: controller } = require('../controllers');
const { authMiddleware: auth } = require('../middlewares');

router.get('/', controller.findAll);

router.post('/',
  auth.requireAuth,
  auth.requireRole([ 'teacher' ]),
  controller.create
);

router.get('/:_id', controller.findById);

router.patch('/enroll/:_id',
  auth.requireAuth,
  controller.enroll
);

router.put('/:_id',
  auth.requireAuth,
  auth.requireRole([ 'teacher' ]),
  controller.update
);

router.delete('/:_id',
  auth.requireAuth,
  auth.requireRole([ 'teacher' ]),
  controller.remove
);

module.exports = router;
