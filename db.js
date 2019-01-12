const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://sbberic@localhost:5432/travel_tips');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });