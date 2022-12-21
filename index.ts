import * as dotenv from "dotenv";

import express, { Application } from "express";
import { sequelize } from "./database";

// Routes
import UsersRoute from "./routes/Users";

const App: Application = express();

App.use(express.json());
App.use("/api/users", UsersRoute);

// Server start
App.listen(process.env.PORT || 3000, () => {
   console.log(`Server launched! 🚀`);
   console.log(`Listening on PORT: ${process.env.PORT || 3000}`);

   // Connection to database
   sequelize
      .authenticate()
      .then(() => {
         console.log(`✅ Connection to database successfully!`);
      })
      .catch((error: any) =>
         console.log(`Error connecting to database: ${error}`)
      );
   sequelize.sync();
});
