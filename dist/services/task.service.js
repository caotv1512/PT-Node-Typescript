"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const tasks = [
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
class TaskService {
    getAll() {
        const query = "SELECT * FROM employees";
        return new Promise((resolve, reject) => {
            db_1.default.query(query, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        });
    }
    create(tutorial) {
        return new Promise((resolve, reject) => {
            db_1.default.query("INSERT INTO employees (first_name, last_name, email) VALUES(?,?,?)", [tutorial.first_name, tutorial.last_name, tutorial.email], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(tutorial);
            });
        });
    }
}
exports.default = TaskService;
