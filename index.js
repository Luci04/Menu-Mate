import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { AdminRouter } from "./Routes/adminRoutes.js";

//env Constants
dotenv.config();

const PORT = process.env.PORT;
const DBname = process.env.DB_NAME;
const DBpassword = process.env.DB_PASSWORD;

const app = express();

mongoose.set('strictQuery', true);

mongoose.connect(
    `mongodb+srv://${DBname}:${DBpassword}@menu-database.6nzjqo9.mongodb.net/?retryWrites=true&w=majority`,
    () => {
        console.log("DB is Connected");
    }
);

app.use(bodyParser.json());

app.use('/admin', AdminRouter);

app.get('/', (req, res) => {
    res.send({ data: "Welcome to the Digital Menu Server" })
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})