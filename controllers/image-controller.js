import ImageUpload from "../models/Image-Upload.js"

export const imageUpload =async(req,res)=>{
    try{

        const newData = new ImageUpload({name:req.body.name,image:req.body.url,userId:req.userId})

        await newData.save()

        return res.status(200).json({message:"image uploaded successfully"})

    }
    catch(err){
        console.log(err)
    }
}