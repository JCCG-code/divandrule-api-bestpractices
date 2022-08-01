import * as assetService from "../services/assetService.js";

export const getAllAssets = (req, res) => {
  const allAssets = assetService.getAllAssets();
  res.json(allAssets);
};

export const getOneAsset = (req, res) => {
  const oneAsset = assetService.getOneAsset();
  res.json(oneAsset);
};

export const createNewAsset = (req, res) => {
  const newAsset = assetService.createNewAsset();
  res.json(newAsset);
};
