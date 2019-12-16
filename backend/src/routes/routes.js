const express = require('express');

const users = require('./routesUser');

const routes = express.Router();

routes.use('/user', users);

module.exports = routes;
