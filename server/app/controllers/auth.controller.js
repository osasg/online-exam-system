const bcrypt = require('bcrypt');
const { to } = require('await-to-js');
const jwt = require('jsonwebtoken');
const status = require('http-status');

const { accountRepository: Account } = require('../repositories');

const postSignIn = async (req, res, next) => {
  const { username, password } = req.body;
  const { error, value } = loginValidator.validate({ username, password });
  if (error)
    return res.status(status.OK)
      .send({
        success: false,
        message: 'ValidationError',
        error,
        token: null
      });

  const [ err0, response ] = await to(Account.findByUsername({ username }));
  if (err0) return next(err0);

  const account = response ? response.account : {};

  if (!account)
    return res.status(status.OK)
      .send({
        success: false,
        message: 'Login failed',
        error: {
          message: 'Account doesn\'t exist!'
        },
        token: null
      });

  const [ err1, result ] = await to(bcrypt.compare(password, account.password));
  if (err1) return next(err1);

  if (!result)
    return res.status(status.OK)
      .send({
        success: false,
        message: 'Login failed',
        error: {
          message: 'password incorrect'
        },
        token: null
      });

  res.status(status.OK)
    .send({
      success: true,
      message: 'Login successfully',
      error: null,
      token: generateJWT(account)
    });
}

const postSignUp = async (req, res, next) => {
  const { username, password, email, firstname, lastname } = req.body;
  const newAccount = { username, password, email, firstname, lastname };

  const [ err, response ] = await to(Account.create({ account: newAccount }));
  if (err) return next(err);

  res.status(200).send({
    success: true,
    message: "Registered",
    token: generateJWT(response.account)
  });
}

const getVerifyEmail = async (req, res, next) => {
  const [ err, { email, verifyEmailKey } ] = await to(Account.newEmailVerifyKey({ _id: req.user._id }));
  if (err) return next(err);

  res.status(200).send({
    success: true,
    message: 'Email verification has been sent'
  });
}

const patchVerifyEmail = async (req, res, next) => {
  const { key } = req.body;

  const [ err, result ] = await to(Account.verifyEmail({ _id: req.user._id, key }));
  if (err) return next(err);

  res.status(200).send({
    success: true,
    message: 'Account has been verified'
  });
}

const getResetPassword = async (req, res) => {
  const { username } = req.params;

  const [ err, account ] = await to(Account.newEmailVerifyKey({ username }));
  if (err) return next(err);

  // sendEmail

  res.status(200).send({
    success: true,
    message: "Email reset password"
  });
}

const patchResetPassword = async (req, res, next) => {
  const { username } = req.params;
  const { key } = req.body;

  const [ err, result ] = await to(Account.resetPassword({ password, username, key }));
  if (err) return next(err);

  res.status(200).send({
    success: true,
    message: "Reset password"
  });
}

/**private */
const generateJWT = ({ _id, username }) => {
  const payloadToken = { _id, username };

  return jwt.sign(payloadToken, process.env.JWT_SECRET, {
    expiresIn: parseInt(process.env.JWT_EXPIRES)
  });
};

module.exports = {
  postSignIn,
  postSignUp,
  getVerifyEmail,
  patchVerifyEmail,
  getResetPassword,
  patchResetPassword
}
