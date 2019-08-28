const express = require('express');
const router = express.Router();

const { accountController: controller } = require('../controllers');
const { authMiddleware: auth } = require('../middlewares');

router.get('/profile',
  auth.requireAuth,
  controller.getProfile
);

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
