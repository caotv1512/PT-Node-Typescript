import { Request, Response } from "express";
import { OkPacket } from "mysql2";
import { Task } from "../interfaces/task.interface";
import connection  from "../db";
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
  getAll(): Promise<Task[]>  {
    const query:string = "SELECT * FROM employees";
    return new Promise((resolve, reject) => {
      connection.query<any[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  create(tutorial : any) {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "INSERT INTO employees (first_name, last_name, email) VALUES(?,?,?)",
        [tutorial.first_name, tutorial.last_name, tutorial.email ],
        (err, res) => {
          if (err) reject(err);
          else resolve(tutorial!)
        }
      );
    });
  }
}
