import express from "express";
import * as assetController from "../../controllers/assetController.js";

const router = express.Router();

router.get("/getAllAssets", assetController.getAllAssets);
router.get("/getOneAsset", assetController.getOneAsset);
router.get("/createNewAsset", assetController.createNewAsset);

export default router;
