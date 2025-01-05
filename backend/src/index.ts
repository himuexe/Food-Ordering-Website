import express from  "express"
import cors from "cors"
import "dotenv/config"
import {Request,Response} from "express"


const app = express();

app.use(express.json());
app.use(cors());


app.get("/test",async (req:Request,res:Response)=>{
    res.json({message:"working"})
})

app.listen(7000, ()=>{
    console.log("server is running on port 7000")
})