const joi = require('joi');

const registerSchema = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

const loginSchema = joi.object({
  name: joi.string().min(2).required(),
  password: joi.string().min(8).required(),
});

const carSchema = joi.object({
  brand: joi.string().required(),
  name: joi.string().required(),
  model: joi.string().required(),
  year: joi.number().required(),
  color: joi.string().required(),
  price: joi.number().required(),
  image: joi.string().required(),
});

module.exports = {
  loginSchema,
  registerSchema,
  carSchema,
};