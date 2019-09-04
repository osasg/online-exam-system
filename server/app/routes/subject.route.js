const express = require('express');
const router = express.Router();

const { subjectController: controller } = require('../controllers');
const { authMiddleware: auth } = require('../middlewares');

router.get('/', 
  controller.findAll
);

router.post('/',
  auth.requireRole([ 'teacher' ]),
  controller.create
);

router.get('/:_id',
  controller.findById
);

router.put('/:_id',
  auth.requireRole([ 'teacher' ]),
  controller.update
);

router.delete('/:_id',
  auth.requireRole([ 'teacher' ]),
  controller.remove
);

module.exports = router;
