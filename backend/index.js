import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

try {
  // DataBase Connection
  dbConnection(process.env.MONGO_DB_URL);

  // Server Connection
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT : ${process.env.PORT}`);
  });
} catch (error) {
    console.log("Error occured in server connection: ", error);
}
