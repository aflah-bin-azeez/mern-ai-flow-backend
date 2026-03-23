import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import aiRoutes from "./routes/ai.js";
import saveRoutes from "./routes/save.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", aiRoutes);
app.use("/api", saveRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"));

app.listen(5000, () => console.log("Server running on 5000"));