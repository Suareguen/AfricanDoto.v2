const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Volunteer = connection.define("volunteer");

module.exports = Volunteer;
