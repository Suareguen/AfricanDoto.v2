const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Member = connection.define("member", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      is: {
        args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        msg: "Error: Wrong email format.",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
  },
  idNumber: {
    type: DataTypes.INTEGER,
  },
  phone: {
    type: DataTypes.INTEGER,
  },
  adress: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.ENUM("admin", "donor", "volunteer", "volunteer_donor"),
  },
});

module.exports = Member;
