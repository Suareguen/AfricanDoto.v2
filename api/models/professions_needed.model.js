const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const ProfessionsNeeded = connection.define(
  "professions_needed",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
  }
  },
  { createdAt: false, updatedAt: false }
);

module.exports = ProfessionsNeeded;
