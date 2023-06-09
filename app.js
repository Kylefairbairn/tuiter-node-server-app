import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitController from "./controllers/tuits/tuit-controller.js";
import mongoose from "mongoose";

//
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
//     || 'mongodb://127.0.0.1:27017/tuiter'


const CONNECTION_STRING = "mongodb+srv://kyle:isawesome@cluster0.0lvcoyg.mongodb.net/?retryWrites=true&w=majority"
    || 'mongodb://127.0.0.1:27017/tuiter'




mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json())
TuitController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
