const { DataTypes } = require('sequelize');
const { connection } = require('../../database');

const Donations = connection.define(
    'donations',
    {
        amount: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.ENUM('punctual', 'mensuall', 'anual')
        }

    },
    { timestamps: false }
);

module.exports = Donations
