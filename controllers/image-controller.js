export const imageUpload =(req,res)=>{
    try{

        console.log("User Id",req.userId)

        return res.status(200).json({message:"success"})

    }
    catch(err){
        console.log(err)
    }
}