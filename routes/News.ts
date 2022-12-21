import express, { Request, Response } from "express";
import News from "../models/News";

const router = express.Router();

// Get all News route route
router.get("/", async (req: Request, res: Response) => {
   try {
      const newsList = await News.findAll();
      res.status(200).send(newsList);
   } catch (error: any) {
      res.status(404).send({ message: error.message });
   }
});

// Get a News by ID route
router.get("/:id", async (req: Request, res: Response) => {
   try {
      const currentNews = await News.findByPk(req.params.id);
      res.status(200).send(currentNews);
   } catch (error: any) {
      res.status(404).send({ message: error.message });
   }
});

// Get a News by User ID route
router.get("/user/:userId", async (req: Request, res: Response) => {
   try {
      const newsList = await News.findAll({
         where: { userId: req.params.userId },
      });
      res.status(200).send(newsList);
   } catch (error: any) {
      res.status(404).send({ message: error.message });
   }
});

// Create a News route
router.post("/", async (req: Request, res: Response) => {
   const { slug, title, description, userId } = req.body;
   try {
      const currentNews = await News.create({
         slug,
         title,
         description,
         userId,
      });
      res.status(200).send(currentNews);
   } catch (error: any) {
      res.status(404).send({ message: error.message });
   }
});

// Edit a News by ID route
router.put("/:id", async (req: Request, res: Response) => {
   const { slug, title, description, userId } = req.body;
   try {
      const currentNews = await News.findByPk(req.params.id);
      //   @ts-ignore
      currentNews!.slug = slug;
      //   @ts-ignore
      currentNews!.title = title;
      //   @ts-ignore
      currentNews!.description = description;
      //   @ts-ignore
      currentNews!.userId = userId;
      currentNews?.save();
      res.status(200).send(currentNews);
   } catch (error: any) {
      res.status(400).send(error.message);
   }
});

// Delete a News by ID route
router.delete("/:id", async (req: Request, res: Response) => {
   try {
      News.destroy({ where: { id: req.params.id } });
      res.status(203).send({
         message: `News with ID ${req.params.id} deleted successfully!`,
      });
   } catch (error: any) {
      res.status(400).send(error.message);
   }
});

export default router;
