"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const db_config_1 = __importDefault(require("../configs/db.config"));
exports.default = mysql2_1.default.createConnection({
    host: db_config_1.default.host,
    user: db_config_1.default.user,
    password: db_config_1.default.password,
    database: db_config_1.default.database
});
