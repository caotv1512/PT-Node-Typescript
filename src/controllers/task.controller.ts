import { Request, Response } from "express";
import { Task } from "../interfaces/task.interface";
import TaskService from "../services/task.service";
const taskService = new TaskService();

export default class TaskController {
  constructor() {}

  async getAll(req: Request, res: Response) {
    const data = await taskService.getAll();
    console.log(data);
    res.send(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await taskService.create(body);
    console.log(data);
    
    if (!data) {
      res.status(404).send({ message: "Data not found" });
    }
    res.status(201).send({ message: "Data created", data: data });
  }
}
