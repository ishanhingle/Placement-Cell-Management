import { Notice } from "../models/notice.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";
export const createNotice=async (req,res)=>{
    try {
        const {content}=req.body
        if(!content){
            return res.status(400).json({
                message: "Something is missing",
                success: false
            })
        }
        const files=await Promise.all(req.files.map(async file=>{
            const fileUri = getDataUri(file);
            try{
                const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
                console.log(cloudResponse.secure_url);
                return {url:cloudResponse.secure_url}
            }
            catch(err){
                console.log(err);
            }
        }))
        console.log(files);
        await Notice.create({
            content,
            files,
        })
        res.status(200).json({
            success:true,
            message:"notice created successfully"
        })
    } catch (error) {
        console.log(error);
    }
}

export const getAllNotices=async (req,res)=>{
    try {
        const notices= await Notice.find({}).sort({createdAt:-1});
        return res.status(200).json({
            notices
        })
    } catch (error) {
        console.log(error)
    }
}