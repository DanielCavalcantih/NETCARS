const registerService = require('../services/registerService');

const register = async (req, res) => {
  const create = await registerService.register(req.body);
  return res.status(201).json({ message: 'Registrado com sucesso!' });
};

module.exports = { register };