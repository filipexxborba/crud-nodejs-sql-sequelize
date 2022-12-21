import { Sequelize } from "sequelize";
import * as tedious from "tedious";
require('dotenv').config();

const databaseConfigs = {
   username: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   host: process.env.HOST,
};

// Sequelize configuration
export const sequelize = new Sequelize({
   dialect: "mssql",
   dialectModule: tedious,
   username: databaseConfigs.username,
   password: databaseConfigs.password,
   database: databaseConfigs.database,
   host: "localhost",
});
