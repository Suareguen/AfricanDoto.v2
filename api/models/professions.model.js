const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Professional = connection.define(
  "professional",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name cannot be null",
        },
        notEmpty: {
          msg: "Name cannot be empty",
        },
        len: {
          args: [2, 255],
          msg: "Name must be between 2 and 255 characters",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description cannot be null",
        },
        notEmpty: {
          msg: "Description cannot be empty",
        },
        len: {
          args: [2, 1000],
          msg: "Description must be between 2 and 1000 characters",
        },
      },
    },
    skill: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Skill cannot be null",
        },
        notEmpty: {
          msg: "Skill cannot be empty",
        },
        len: {
          args: [2, 255],
          msg: "Skill must be between 2 and 255 characters",
        },
      },
    },
  },
  { createdAt: false, updatedAt: false }
);

module.exports = Professional;
