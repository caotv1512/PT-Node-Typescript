import { Router, Request, Response } from "express";
import TaskController from "../controllers/task.controller";
const taskController = new TaskController();

const router = Router();
// Add your CRUD API implementation here

//Get All data Task
router.get("/", taskController.getAll);

//Create new data
router.post('/', taskController.create);

export default router;
