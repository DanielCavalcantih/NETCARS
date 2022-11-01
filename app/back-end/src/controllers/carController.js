const carService = require('../services/carService');

const getCars = async (req, res) => {
  const allCars = await carService.getCars();
  return res.status(200).json(allCars);
};

const getCarById = async (req, res) => {
  const { id } = req.params;
  const car = await carService.getCarById(id);
  return res.status(200).json(car);
};

const getCarsByUserId = async (req, res) => {
  const { id } = req.payload;
  const allCars = await carService.getCarsByUserId(id);
  return res.status(200).json(allCars);
};

const getCarsBySearch = async (req, res) => {
  const { search } = req.params;
  const response = await carService.getCarsBySearch(search);
  return res.status(200).json(response);
};

const postCar = async (req, res) => {
  const { id } = req.payload;
  const newCar = await carService.postCar(id, req.body);
  return res.status(201).json(newCar);
};

const updateCar = async (req, res) => {
  const { id } = req.params;
  const newCar = await carService.updateCar(id, req.body);
  return res.status(201).json(newCar);
};

const deleteCar = async (req, res) => {
  const { id } = req.params;
  await carService.deleteCar(id);
  return res.status(202).json({ OK: 'Carro deletado com sucesso!' });
};

module.exports = {
  getCars,
  getCarById,
  getCarsByUserId,
  getCarsBySearch,
  postCar,
  updateCar,
  deleteCar,
};