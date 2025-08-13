import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_Uri);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process with failure
    }        
}