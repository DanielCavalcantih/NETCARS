const { Car, User } = require('../models');
const { carSchema } = require('./schemas');

const validationCar = async (req, res, next) => {
  const { id } = req.params;
  const carById = await Car.findOne({ where: { id } });
  if (!carById) return res.status(404).json({ message: 'Carro não encontrado!' });
  return next();
};

const validationCarByUser = async (req, res, next) => {
  const { id } = req.payload;
  const cars = await Car.findAll({ where: { userId: id } });
  if (cars.length === 0) return res.status(406).json({ message: 'Você não publicou nenhum carro!' });
  return next();
};

const deleteOrUpdateCarValidation = async (req, res, next) => {
  const { id } = req.params;
  const { payload } = req;
  const carById = await Car.findOne({ where: { id } });
  if (carById.userId !== payload.id) return res.status(401).json({ message: 'Usuário não autorizado!' });
  return next();
};

const carFieldsValidation = async (req, res, next) => {
  const validation = carSchema.validate(req.body);
  if (validation.error) return res.status(400).json({ message: 'Ocorreu um erro, verifique os campos...' });
  return next();
};

module.exports = {
  deleteOrUpdateCarValidation,
  validationCar,
  validationCarByUser,
  carFieldsValidation,
};