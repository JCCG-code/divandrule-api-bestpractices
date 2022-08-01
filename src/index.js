import express from "express";
import mongoose from "mongoose";

import authRouter from "./v1/routes/authRoutes.js";
import assetRouter from "./v1/routes/assetRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/asset", assetRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
