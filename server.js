import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import userRoute from './routes/user.route.js'
import uploadRoute from './routes/upload.route.js'

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

//middleware
app.use(cookieParser())
app.use(express.json())
app.use(cors({origin:["http://localhost:5173", "https://imageuploaderdobby.netlify.app"],credentials:true}))


app.use("/api",userRoute)
app.use("/api/image-upload",uploadRoute)


app.listen(3001,()=>{
    db()
    console.log("Server is running")
})