const { Car, User } = require('../models');

const Op = require('sequelize').Op;

const getCars = async () => {
  const allCars = await Car.findAll({
    order: [
      ['price', 'ASC'],
    ],
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
    ],
  });

  return allCars;
};

const getCarById = async (id) => {
  const car = await Car.findOne({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
    ],
    where: {
      id,
    },
  });

  return car;
};

const getCarsByUserId = async (userId) => {
  const allCars = await Car.findAll({ where: { userId } });
  return allCars;
};

const getCarsBySearch = async (search) => {
  const searchItem = search[0].toUpperCase() + search.substring(1);

  const findCars = await Car.findAll({
    where: {
      [Op.or]: [{ brand: searchItem }, { name: searchItem }, { model: searchItem }],
    },
  });

  return findCars;
};

const postCar = async (id, newCar) => {
  const { name, model, brand, color, price, year, image } = newCar;

  const addCar = await Car.create({ name, model, brand, color, price, year, image, userId: id });

  return addCar;
};

const updateCar = async (id, newCar) => {
  const car = await getCarById(id);

  await Car.update(
    {
      name: newCar.name,
      model: newCar.model,
      brand: newCar.brand,
      color: newCar.color,
      price: newCar.price,
      year: newCar.year,
      image: newCar.image,
    },
    {
      where: {
        name: car.name,
        model: car.model,
        brand: car.brand,
        color: car.color,
        price: car.price,
        year: car.year,
        image: car.image,
      }
    }
  );

  const updatedCar = await getCarById(id);
  
  return updatedCar;
};

const deleteCar = async (id) => {
  await Car.destroy({ where: { id } });
};

module.exports = {
  getCars,
  getCarById,
  getCarsByUserId,
  getCarsBySearch,
  postCar,
  deleteCar,
  updateCar,
};