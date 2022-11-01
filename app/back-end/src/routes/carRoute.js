const express = require('express');

const {
  getCars,
  getCarById,
  getCarsByUserId,
  getCarsBySearch,
  postCar,
  updateCar,
  deleteCar,
} = require('../controllers/carController');

const { tokenValidation } = require('../middlewares/tokenValidation');

const {
  deleteOrUpdateCarValidation,
  validationCar,
  validationCarByUser,
  carFieldsValidation,
} = require('../middlewares/carValidation');

const carRouter = express.Router()

carRouter.get('/cars', getCars);

carRouter.get('/cars/:id', validationCar, getCarById);

carRouter.get('/mycars', tokenValidation, validationCarByUser, getCarsByUserId);

carRouter.get('/searchcars/:search', getCarsBySearch);

carRouter.post('/cars', tokenValidation, carFieldsValidation, postCar);

carRouter.put('/cars/:id', tokenValidation, validationCar, deleteOrUpdateCarValidation, updateCar);

carRouter.delete('/cars/:id', tokenValidation, validationCar, deleteOrUpdateCarValidation, deleteCar);

module.exports = { carRouter };