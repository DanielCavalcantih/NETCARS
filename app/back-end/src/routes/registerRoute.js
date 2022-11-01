const express = require('express');

const { register } = require('../controllers/registerController');

const {
  fieldsValidation,
  registerValidation,
} = require('../middlewares/registerValidation');

const registerRoute = express.Router();

registerRoute.post('/register', fieldsValidation, registerValidation, register);

module.exports = { registerRoute };