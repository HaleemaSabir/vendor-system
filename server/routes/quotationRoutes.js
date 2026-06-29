import express from "express";
import {
  addQuotation,
  getQuotations,
  updateQuotationStatus,
  deleteQuotation,
} from "../controllers/quotationController.js";

const router = express.Router();

router.post("/add", addQuotation);
router.get("/", getQuotations);
router.put("/:id", updateQuotationStatus);
router.delete("/:id", deleteQuotation);

export default router;