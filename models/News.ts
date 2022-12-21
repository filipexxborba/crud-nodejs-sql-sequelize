import { DataTypes } from "sequelize";
import { sequelize } from "../database";

sequelize.define("News", {
   id: {
      primaryKey: true,
      autoIncrement: true,
      type: "INTEGER",
   },
   slug: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   title: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   description: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: { isDate: true },
   },
});
