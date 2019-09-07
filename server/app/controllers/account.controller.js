const { to } = require('await-to-js');

const { accountRepository: Account } = require('../repositories');

const messages = {
  ACCOUNT_FIND_ALL: 'ACCOUNT_FIND_ALL',
  ACCOUNT_FOUND: 'ACCOUNT_FOUND',
  ACCOUNT_NOT_FOUND: 'ACCOUNT_NOT_FOUND',
  ACCOUNT_CREATED: 'ACCOUNT_CREATED',
  ACCOUNT_UPDATED: 'ACCOUNT_UPDATED',
  ACCOUNT_REMOVED: 'ACCOUNT_REMOVED'
}

const findById = async (req, res, next) => {
  const [ err, account ] = await to(Account.findById({ _id: req.params._id }));
  if (err) return next(err);

  if (!account)
    return res.send({
      success: false,
      message: messages.ACCOUNT_NOT_FOUND,
      account: null
    });

  res.send({
    success: true,
    message: messages.ACCOUNT_FOUND,
    account
  });
}

const findAll = async (req, res, next) => {
  const [ err, accounts ] = await to(Account.findAll());
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.ACCOUNT_FIND_ALL,
    accounts
  });
}

const getProfile = async (req, res, next) => {
  const [ err, account ] = await to(Account.findById(req.user._id));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.ACCOUNT_FOUND,
    account
  });
}

const create = async (req, res, next) => {
  const [ err, account ] = await to(Account.create(req.body));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.ACCOUNT_CREATED,
    account
  });
}

const update = async (req, res, next) => {
  const [ err ] = await to(Account.update(req.body));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.ACCOUNT_UPDATED
  });
}

const remove = async (req, res, next) => {
  const [ err ] = await to(Account.remove(req.user._id));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.ACCOUNT_REMOVED
  });
}

module.exports = {
  findById,
  findAll,
  getProfile,
  create,
  update,
  remove
}
