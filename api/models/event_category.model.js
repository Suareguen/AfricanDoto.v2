const { DataTypes } = require('sequelize');
const { connection } = require('../../database');

const EventCategory = connection.define(
    'event_category',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { timestamps: false }
);

module.exports = EventCategory
