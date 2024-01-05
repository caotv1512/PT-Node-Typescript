// ==================Connect Express to MySQL============
// get the client
import dotenv from "dotenv";
dotenv.config();
// create the connection to database
export default  {
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

