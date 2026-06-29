import Vendor from "../models/Vendor.js";
import Quotation from "../models/Quotation.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalVendors = await Vendor.countDocuments();
    const totalQuotations = await Quotation.countDocuments();

    const pendingQuotations = await Quotation.countDocuments({
      status: "Pending",
    });

    const approvedQuotations = await Quotation.countDocuments({
      status: "Approved",
    });

    const recentQuotations = await Quotation.find()
      .populate("vendor")
      .sort({ createdAt: -1 })
      .limit(6);

    res.status(200).json({
      success: true,
      stats: {
        totalVendors,
        totalQuotations,
        pendingQuotations,
        approvedQuotations,
      },
      recentQuotations,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load dashboard data",
      error: error.message,
    });
  }
};