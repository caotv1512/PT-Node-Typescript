import { Request, Response } from "express";
import { Task } from "../interfaces/task.interface";
import TaskService from "../services/task.service";
const taskService = new TaskService();

export default class TaskController {
  constructor() {}

  getAll(req: Request, res: Response) {
    const data = taskService.getAll();
    res.send(data);
  }

  create(req: Request, res: Response) {
    const data = taskService.create(req, res);
    if (!data) {
      res.status(404).send({ message: "Data not found" });
    }
    res.status(201).send({ message: "Data created", data: data });
  }
}
