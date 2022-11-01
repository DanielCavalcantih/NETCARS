const { User } = require('../models');

const register = async (newUser) => {
  const create = await User.create(newUser);
  return create;
};

module.exports = { register };