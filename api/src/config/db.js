import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log("Error connecting to the MongoDB", error);
    process.exit(1); // exit with failure
  }
};
