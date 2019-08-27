const { accountRepository: Account } = require('../repositories');

const messages = {
  ACCOUNT_FIND_BY_ID: 'ACCOUNT_FIND_BY_ID',
  ACCOUNT_CREATED: 'ACCOUNT_CREATED',
  ACCOUNT_UPDATED: 'ACCOUNT_UPDATED',
  ACCOUNT_REMOVED: 'ACCOUNT_REMOVED'
}

const getProfile = async (req, res, next) => {
  const [ err, account ] = await to(Account.findById(req.user._id));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.ACCOUNT_FIND_BY_ID,
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
    success: false,
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
  getProfile,
  create,
  update,
  remove
}
