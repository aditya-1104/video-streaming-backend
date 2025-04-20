console.log(">>> loaded app.js");

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { allowedOrigin } from "./constants.js";

const app = express();

app.use(cors({
    origin: function(origin, callback) {
        if (!origin) return callback(null,true);

        if (allowedOrigin.includes(origin)) {
            return callback(null,true);
        } else {
            return callback(new Error('Access Denied by CORS Policy!'));
        }
    }, credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use((err,req,res,next) => {
    res.status(err.code || 500).json({ 
        success: false,
        error: err.message,
    });
});

import { router } from "./routes/user.routes.js";
app.use("/api/v1/users", router);

export { app };
