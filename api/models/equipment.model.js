const { DataTypes } = require('sequelize');
const { connection } = require('../../database');

const Equipment = connection.define(
    'equipment',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    { timestamps: false }
);

module.exports = Equipment
