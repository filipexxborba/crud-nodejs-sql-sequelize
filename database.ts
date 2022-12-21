import { Sequelize } from "sequelize";
import * as tedious from "tedious";

// Sequelize configuration
export const sequelize = new Sequelize({
   dialect: "mssql",
   dialectModule: tedious,
   username: "sa",
   password: "Filipe@@2022",
   database: "crud-sequelize",
   host: "localhost",
});
