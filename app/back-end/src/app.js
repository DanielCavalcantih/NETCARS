const express = require('express');
const { loginRouter } = require('./routes/loginRoute');
const { carRouter } = require('./routes/carRoute');
const { registerRoute } = require('./routes/registerRoute');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(express.json());

app.use(loginRouter);
app.use(carRouter);
app.use(registerRoute);

module.exports = app;