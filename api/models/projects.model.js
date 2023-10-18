const { DataTypes } = require('sequelize');
const { connection } = require('../../database');

const Project = connection.define(
    'project',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        target: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        objective: {
            type: DataTypes.STRING,
            allowNull: false
        },
        collect: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
            },
        budget: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        deadline: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Error: La dirección no puede estar vacía."
                }
            }
        },
        status: {
            type: DataTypes.ENUM('accepted', 'denied', 'draft'),
            defaultValue: 'draft'
        },
        avtive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }
);

module.exports = Project
