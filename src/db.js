import mysql from "mysql2";
import {
  MYSQL2_DATABASE,
  MYSQL2_HOST,
  MYSQL2_PASSWORD,
  MYSQL2_USER,
} from "./config.js";

export const connectDB = async () => {
  try {
    await mysql.createConnection({
      host: MYSQL2_HOST,
      user: MYSQL2_USER,
      password: MYSQL2_PASSWORD,
      database: MYSQL2_DATABASE,
    });
    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
};
