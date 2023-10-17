const { DataTypes } = require('sequelize');
const { connection } = require('../../database');

const Event = connection.define(
    'event',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        start_date: {
            type: DataTypes.STRING,
            allowNull: true
        },
        end_date: {
            type: DataTypes.STRING,
            allowNull: true
            },
    },
    { timestamps: false }
);

module.exports = Event
