import express from "express";
import { getDashboardStats } from "../controllers/dashboardController.js";

const router = express.Router();

// GET Dashboard Stats + Recent Activity
router.get("/", getDashboardStats);

export default router;