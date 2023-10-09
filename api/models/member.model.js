const { DataTypes } = require('sequelize');
const { connection } = require('../../database');

const Member = connection.define(
    'member',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Error: El nombre no puede estar vacío."
                }
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Error: El apellido no puede estar vacío."
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Error: El correo electrónico no puede estar vacío."
                },
                isEmail: {
                    msg: "Error: Formato de correo electrónico incorrecto."
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Error: La contraseña no puede estar vacía."
                }
            }
        },
        idNumber: {
            type: DataTypes.STRING,
            allowNull: false
            },
        phone: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: {
                    msg: "Error: El número de teléfono debe ser un número entero."
                }
            }
        },
        address: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Error: La dirección no puede estar vacía."
                }
            }
        },
        role: {
            type: DataTypes.ENUM('admin', 'donor', 'volunteer', 'volunteer_donor'),
            validate: {
                notEmpty: {
                    msg: "Error: El rol no puede estar vacío."
                },
                isIn: {
                    args: [['admin', 'donor', 'volunteer', 'volunteer_donor']],
                    msg: "Error: Rol no válido."
                }
            }
        }
    }
);

module.exports = Member;
