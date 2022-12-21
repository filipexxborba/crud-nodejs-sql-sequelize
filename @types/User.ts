import { Optional } from "sequelize";

export type UserAttributes = {
   id?: number;
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   isActive: boolean;
};

export type UserCreationAttributes = Optional<UserAttributes, "id">;
