const { User } = require('../models');
const { generateToken } = require('../generateToken');

const login = async (login) => {
  const { name, password } = login;
  const user = await User.findOne({
    where: {
      name,
      password,
    },
  });
  const token = generateToken(user.dataValues);
  return token;
}

module.exports = { login };