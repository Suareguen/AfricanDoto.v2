const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Professional = connection.define(
  "professional",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name cannot be empty",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Description cannot be empty",
        },
      },
    },
    skill: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Skill cannot be empty",
        },
      },
    },
  },
  { createdAt: false },
  { updatedAt: false }
);

module.exports = Professional;
