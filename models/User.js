import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:5
        
    },
    role:{
        type:String,
        required:true,
        default:"user",
        enum:["user","admin"]
    }
},{timestamps:true})

export default  mongoose.model("User",userSchema)