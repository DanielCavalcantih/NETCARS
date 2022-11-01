const { User } = require('../models');
const { loginSchema } = require('./schemas');

const fieldsValidation = async (req, res, next) => {
  const validation = loginSchema.validate(req.body);
  if (validation.error) return res.status(400).json({ message: 'Ocorreu um erro, verifique os campos...' });
  return next();
}

const loginValidation = async (req, res, next) => {
  const { name, password } = req.body;
  const user = await User.findOne({
    where: {
      name,
      password,
    },
  });
  if (!user) return res.status(400).json({ message: 'Usuário e/ou senha incorreta!' });
  return next();
};

module.exports = {
  fieldsValidation,
  loginValidation,
};