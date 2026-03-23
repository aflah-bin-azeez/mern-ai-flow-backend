import express from "express";
import Flow from "../models/Flow.js";

const router = express.Router();

router.post("/save", async (req, res) => {
  try {
    const { prompt, response } = req.body;

    if (!prompt || !response) {
      return res.status(400).json({ error: "Missing data" });
    }

    const doc = await Flow.create({ prompt, response });

    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save" });
  }
});

export default router; 