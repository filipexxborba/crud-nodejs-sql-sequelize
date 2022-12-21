import { DataTypes } from "sequelize";
import { sequelize as database } from "../database";

const News = database.define("news", {
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
});

export default News;
