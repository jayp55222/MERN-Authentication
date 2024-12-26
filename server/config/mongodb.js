import mongoose from "mongoose";

const connectDB = async () => {

  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};


export default connectDB;