const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Books = require('../models/Books');

const connection = new Sequelize(dbConfig);

User.init(connection);
Books.init(connection);

module.exports = connection;