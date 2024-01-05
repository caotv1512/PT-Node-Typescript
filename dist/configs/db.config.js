"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ==================Connect Express to MySQL============
// get the client
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// create the connection to database
exports.default = {
    host: process.env.DB_HOST || "",
    port: process.env.DB_PORT || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "",
};
// open the MySQL connection
// connection.connect((error: any) => {
//     if (error) throw error;
//     console.log("Successfully connected to the database.");
// });
