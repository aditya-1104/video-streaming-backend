import mongoose from "mongoose";

export const connectDB = async function() {
    try {
        const connectionResponse = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`Database Connected! DB Host: ${connectionResponse.connection.host}`);
    } catch (error) {
        console.log(`Database connection failed! `, error);
        process.exit(1);
    }
};