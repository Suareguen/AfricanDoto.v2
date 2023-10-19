const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { checkConnection, syncModels } = require("./database/index.js");
const addRelationsToModels = require("./database/relations.js");

const initializeAndListenWithExpress = () => {
  try {
    const app = express()
      .use(express.json())
      .use(morgan("dev"))
      .use(cors())
      .use('/api', require('./api/routes/index.js'))
      .listen(process.env.PORT, () => {
        console.log(`> Listening on port: ${process.env.PORT}`);
      });
  } catch (error) {
    throw error;
  }
};

async function checkAndSyncMySQL() {
    try {
          await checkConnection();
          addRelationsToModels();
          await syncModels();
    } catch (error) {
        throw error
    }

}

async function startAPI() {
    try {
          await checkAndSyncMySQL();
          initializeAndListenWithExpress();
    } catch (error) {
        throw error
    }

}

startAPI();
