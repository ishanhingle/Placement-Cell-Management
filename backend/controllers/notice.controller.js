import { Notice } from "../models/notice.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";
import nodemailer from 'nodemailer'
import { User } from "../models/user.model.js";

const sendEmail=async ()=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ishanproject.iet@gmail.com',
          pass: 'zlfnviwvciaspoax'
        }
      });
      User.find().then((users)=>{
        users.forEach(user => {
            var mailOptions = {
                from: 'ishanproject.iet@gmai.com',
                to: user.email,
                subject: 'Notice Board Updated',
                text: 'Hey Kindly Check the Notice Board'
              };
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            })
            });
      });
      
}

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
        await sendEmail();
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