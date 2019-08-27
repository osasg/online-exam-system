const express = require('express');
const router = express.Router();

const { authController: controller } = require('../controllers');
const { authMiddleware: auth } = require('../middlewares');

router.post('/signin', controller.postSignIn);

router.post('/signup', controller.postSignUp);

router.get('/verify/email',
  auth.requireAuth,
  controller.getVerifyEmail
);

router.patch('/verify/email',
  auth.requireAuth,
  controller.patchVerifyEmail
);

router.get('/resetpwd/:username', controller.getResetPassword);

router.patch('/resetpwd/:username', controller.patchResetPassword);

module.exports = router;
