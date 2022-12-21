import { DataTypes } from "sequelize";
import { sequelize as database } from "../database";

export const News = database.define("News", {
   id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
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
