import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Ganod:HaJZR6QqhPOTVnQN@cluster0.wh2li.mongodb.net/recipe-app').then(()=>console.log("DB connected."));
}
