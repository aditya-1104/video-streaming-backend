console.log(">>> loaded dbconnecter.js");

import mongoose from "mongoose";

const dbConnector = async function() {
    try {
        const connectionResponse = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected! DB Host: ${connectionResponse.connection.host}`);
    } catch (error) {
        console.log(`Database connection failed! `, error.message);
        throw error;
    }
};

export { dbConnector };
