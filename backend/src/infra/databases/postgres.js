const Sequelize = require('sequelize');
const dbConfig = require('../../config/postgres.config');

const User = require('../../models/User');
const Address = require('../../models/Address');

const connection = new Sequelize(dbConfig);


connection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

User.init(connection);


module.exports = connection;