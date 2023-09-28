const { Sequelize } = require('sequelize')
require('dotenv').config()
const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false,
  }
);

const checkConnection = async () => {
    try {
        await connection.authenticate()
        console.log("Connection with Database has been stablish succesfully!!!")
    } catch (error) {
        throw error
    }
}

async function syncModels(value) {
  const state = {
    alter: { alter: true },
    force: { force: true },
  };
  try {
    await connection.sync(state[value] || "");
    console.log(
      `All models were synchronized successfully using sync(${
        JSON.stringify(state[value]) || ""
      }).`
    );
  } catch (error) {
    throw error;
  }
}



module.exports = {
  connection,
  checkConnection,
  syncModels,
};