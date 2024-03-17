import mongoose,{Schema} from "mongoose";
import User from "./User.js";

const ImageUploadSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})

export default mongoose.model("ImageUpload",ImageUploadSchema);