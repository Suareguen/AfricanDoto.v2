const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const ProfessionsNeeded = connection.define(
  "professions_needed",
  {
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  },
  { createdAt: false, updatedAt: false }
);

module.exports = ProfessionsNeeded;
