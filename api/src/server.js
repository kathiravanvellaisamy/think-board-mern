import express from "express";
import notesRoute from "./routes/notesRoute.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 6000;
connectDB();

// middleware
app.use(express.json());

app.use("/api/notes", notesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
