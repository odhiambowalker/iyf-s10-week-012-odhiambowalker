import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((e) => console.error("MongoDB Error:", e));