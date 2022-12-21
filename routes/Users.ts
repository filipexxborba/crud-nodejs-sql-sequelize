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

router.get("/:id", async (req: Request, res: Response) => {
   try {
      const user = await User.findByPk(req.params.id);
      res.status(200).send(user);
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
      res.status(201).send(newUser);
   } catch (error: any) {
      res.status(400).send(error.message);
   }
});

router.put("/:id", async (req: Request, res: Response) => {
   const { firstName, lastName, email, password, isActive } = req.body;
   try {
      const currentUser = await User.findByPk(req.params.id);
      //   @ts-ignore
      currentUser!.firstName = firstName;
      //   @ts-ignore
      currentUser!.lastName = lastName;
      //   @ts-ignore
      currentUser!.email = email;
      //   @ts-ignore
      currentUser!.password = password;
      //   @ts-ignore
      currentUser!.isActive = isActive;
      currentUser?.save();
      res.status(200).send(currentUser);
   } catch (error: any) {
      res.status(400).send(error.message);
   }
});

router.delete("/:id", async (req: Request, res: Response) => {
   try {
      User.destroy({ where: { id: req.params.id } });
      res.status(200).send({
         message: `User with ID: ${req.params.id} is deleted succesfully!`,
      });
   } catch (error: any) {
      res.status(400).send(error.message);
   }
});

export default router;
