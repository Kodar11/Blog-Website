import mongoose from "mongoose";

export const ConnectDb = async () => {
    await mongoose.connect('mongodb+srv://blogger_11:1234@cluster0.qylqqon.mongodb.net/')
    console.log('DB connected');
    
}