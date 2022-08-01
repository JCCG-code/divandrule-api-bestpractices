import express from "express";
import mongoose from "mongoose";

import authRouter from "./v1/routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
mongoose.connect("mongodb://localhost/divandrule", (err, db) => {
  if (db) console.log(`Connecting to MongoDB`);
  else console.log(err);
});
