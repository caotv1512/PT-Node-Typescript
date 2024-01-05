import { Request, Response } from "express";
import { Task } from "../interfaces/task.interface";
const tasks: Task[] = [
  {
    id: 1,
    title: "Task 2",
    description: "Description 35",
    completed: false,
  },
  {
    id: 2,
    title: "Task 3",
    description: "Description 35",
    completed: false,
  },
  {
    id: 3,
    title: "Task 4",
    description: "Description 35",
    completed: false,
  },
];
export default class TaskService {
  getAll() {
    return tasks;
  }

  create(req: Request, res: Response) {
    const {title, description} = req.body;
    if (!title || !description) {
        return 
    }
    const task: Task = {
      id: tasks.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    tasks.push(task);
    return task;
  }
}
