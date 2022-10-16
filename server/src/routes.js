const express = require('express');
const BooksController = require('./controllers/BooksController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

//routes.get('/', (req, res) =>{
//    return res.json({hello: ' World'});
//})

routes.post('/users', UserController.store);
routes.post('/books', BooksController.store);


module.exports = routes;