import mongoose from "mongoose";

const flowSchema = new mongoose.Schema({
  prompt: String,
  response: String,
}, { timestamps: true });

const Flow = mongoose.model("Flow", flowSchema);
export default Flow;