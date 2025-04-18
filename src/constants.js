console.log(">>> loaded constants.js");

import dotenv from "dotenv";
dotenv.config();

export const DB_NAME = "videoDB";
export const allowedOrigin = String(process.env.CORS_ORIGIN).split(',');
