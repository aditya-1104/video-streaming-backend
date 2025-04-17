import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/dbconnect.js";

dotenv.config();
const app = express();
connectDB();

app.get('/', (req, res) => {
    res.send(`Backend Connected!`);
});

app.listen(process.env.PORT, () => {
    console.log(`App is listening on http://localhost:${process.env.PORT}`);
})