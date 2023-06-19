import { config } from "dotenv";
config();

export const MYSQL2_HOST = process.env.MYSQL2_HOST;
export const MYSQL2_USER = process.env.MYSQL2_USER;
export const MYSQL2_PASSWORD = process.env.MYSQL2_PASSWORD;
export const MYSQL2_DATABASE = process.env.MYSQL2_DATABASE;
