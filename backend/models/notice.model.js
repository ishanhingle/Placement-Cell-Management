import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
    content:String,
    files:[{
        url:String,
    }]
},{timestamps:true});
export const Notice=mongoose.model("Notice", noticeSchema);