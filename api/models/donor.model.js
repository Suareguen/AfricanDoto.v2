const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Donor = connection.define("donor");

module.exports = Donor;
