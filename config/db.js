import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_USER);
       console.log("MongoDB is connected");
    } catch (error) {
        console.log("MongoDb connection failed", error.message);
        process.exit(1);
    }
};

export default connectDB;