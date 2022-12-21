import { DataTypes } from "sequelize";
import { sequelize as database } from "../database";

export const User = database.define("User", {
   id: {
      primaryKey: true,
      autoIncrement: true,
      type: "INTEGER",
   },
   firstName: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   lastName: { type: DataTypes.STRING, allowNull: true },
   email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
   },
   password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isPassword: true },
   },
   isActive: {
      type: DataTypes.BOOLEAN,
   },
});
