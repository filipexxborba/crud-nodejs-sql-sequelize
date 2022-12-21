import express, { Request, Response } from "express";
import User from "../models/User";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
   try {
      const users = await User.findAll();
      console.log(users);
      res.status(200).send(users);
   } catch (error: any) {
      res.status(400).send(error.message);
   }
});

router.post("/", async (req: Request, res: Response) => {
   const { firstName, lastName, email, password } = req.body;
   console.log(firstName, lastName, email, password);

   try {
      const newUser = await User.create({
         firstName,
         lastName,
         email,
         password,
         isActive: true,
      });

      console.log(newUser);
      res.status(201).send(newUser);
   } catch (error: any) {
      res.status(400).send(error.message);
   }
});

export default router;
