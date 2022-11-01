const express = require('express');
const { login } = require('../controllers/loginController');
const {
  fieldsValidation,
  loginValidation,
} = require('../middlewares/loginValidation');

const loginRouter = express.Router();

loginRouter.post('/login', fieldsValidation, loginValidation, login);

module.exports = { loginRouter };