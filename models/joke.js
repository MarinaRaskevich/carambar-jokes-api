const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../database');

const Joke = sequelize.define("Joke", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync();

module.exports = Joke;
