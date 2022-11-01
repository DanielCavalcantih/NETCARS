const { User } = require('../models');
const { registerSchema } = require('./schemas');

const fieldsValidation = async (req, res, next) => {
  const validation = registerSchema.validate(req.body);
  if (validation.error) return res.status(400).json({ message: 'Ocorreu um erro, verifique os campos...' });
  return next();
}

const registerValidation = async (req, res, next) => {
  const { name, email, password } = req.body;
  const findUser = await User.findOne({
    where: {
      name,
      email,
      password,
    },
  });
  if (findUser) return res.status(406).json({ message: 'Usuário já registrado!' });
  return next();
};

module.exports = {
  fieldsValidation,
  registerValidation,
};