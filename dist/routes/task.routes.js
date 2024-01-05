"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
const taskController = new task_controller_1.default();
const router = (0, express_1.Router)();
// Add your CRUD API implementation here
//Get All data Task
router.get("/", taskController.getAll);
//Create new data
router.post('/', taskController.create);
exports.default = router;
