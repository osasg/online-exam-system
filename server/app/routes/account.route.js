const express = require('express');
const router = express.Router();

const { accountController: controller } = require('../controllers');
const { authMiddleware: auth } = require('../middlewares');

router.get('/',
  auth.requireAuth,
  controller.findAll
);

router.get('/profile',
  auth.requireAuth,
  controller.getProfile
);

router.get('/:_id', controller.findById);

router.post('/', controller.create);

router.put('/:_id',
  auth.requireAuth,
  controller.update
);

router.delete('/:_id',
  auth.requireAuth,
  controller.remove
);

module.exports = router;
