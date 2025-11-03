const usersController = require('../controllers/users.controllers');

const express = require('express');

const usersRoutes = express.Router();

usersRoutes.post('/login', usersController.Login);

module.exports = usersRoutes;