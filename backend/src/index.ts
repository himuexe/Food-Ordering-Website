import express from  "express"
import cors from "cors"
import "dotenv/config"
import {Request,Response} from "express"
import mongoose from "mongoose"
import myUserRoute from "./routes/MyUserRoute"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{
    console.log("connected to database")
});

const app = express();
app.use(cors());
app.use(express.json());



app.use("/api/my/user", myUserRoute);

app.listen(7000, ()=>{
    console.log("server is running on port 7000")
})