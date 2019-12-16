const express = require('express');

const routes = express.Router();

const userController = require('../controllers/userController');

routes.get('/', (req, res) => {
    return res.json({ "get": "Users" });
});


routes.post('/store', userController.store); //cadastrar usuario
routes.get('/list', userController.index); //ler todos os usuarios
routes.get('/read/:user_id', userController.read); //ler um usuario
routes.put('/update', userController.update);
routes.delete('/delete/:user_id', userController.delete);


module.exports = routes;