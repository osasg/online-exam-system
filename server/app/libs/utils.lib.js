const utils = {};

utils.filterEmptyFields = obj => {
  return Object.fromEntries(Object.entries(obj).filter(([k, v], i, arr) => v));
}

module.exports = utils;
