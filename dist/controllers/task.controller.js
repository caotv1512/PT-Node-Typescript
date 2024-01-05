"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_service_1 = __importDefault(require("../services/task.service"));
const taskService = new task_service_1.default();
class TaskController {
    constructor() { }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield taskService.getAll();
            console.log(data);
            res.send(data);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const data = yield taskService.create(body);
            console.log(data);
            if (!data) {
                res.status(404).send({ message: "Data not found" });
            }
            res.status(201).send({ message: "Data created", data: data });
        });
    }
}
exports.default = TaskController;
