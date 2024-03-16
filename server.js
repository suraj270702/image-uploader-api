import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

//database connection

const db = async()=>{
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(
          process.env.MONGOOSE_URL
        );
        console.log("Database Connected");
      } catch (error) {
        console.log(error);
      }
}


app.use(cookieParser())
app.use(express.json())
app.use(cors({credentials:true}))


app.listen(3001,()=>{
    db()
    console.log("Server is running")
})