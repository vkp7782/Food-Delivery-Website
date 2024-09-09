import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://vishalmongodb:vishalmongodb7782pandey@cluster0.yawb1.mongodb.net/food-del').then(()=>console.log("DB connectd"));
}