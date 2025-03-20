import mongoose from "mongoose";

// Database connection
export const dbConnection = (DB_Url) => {
  mongoose
    .connect(DB_Url)
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Error occured in database connection: ", err);
    });
};