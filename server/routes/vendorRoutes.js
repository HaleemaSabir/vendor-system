import express from "express";
import {
  addVendor,
  getVendors,
  updateVendor,
  deleteVendor
} from "../controllers/vendorController.js";

const router = express.Router();

/* CREATE */
router.post("/add", addVendor);

/* READ + SEARCH */
router.get("/", getVendors);

/* UPDATE */
router.put("/:id", updateVendor);

/* DELETE */
router.delete("/:id", deleteVendor);

export default router;