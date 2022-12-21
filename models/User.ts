import { DataTypes } from "sequelize";
import { sequelize as database } from "../database";

const User = database.define("user", {
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
   },
   isActive: {
      type: DataTypes.BOOLEAN,
   },
});

export default User;