import Vendor from "../models/Vendor.js";
import Activity from "../models/Activity.js";

/* =========================
   ADD VENDOR
========================= */
export const addVendor = async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body);

    await Activity.create({
      message: `Vendor ${vendor.companyName} added`,
    });

    res.status(201).json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/* =========================
   GET ALL VENDORS
========================= */
export const getVendors = async (req, res) => {
  try {
    const search = req.query.search || "";

    const vendors = await Vendor.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { companyName: { $regex: search, $options: "i" } },
      ],
    });

    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   UPDATE VENDOR
========================= */
export const updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    await Activity.create({
      message: `Vendor ${vendor.companyName} updated`,
    });

    res.json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   DELETE VENDOR
========================= */
export const deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    await Activity.create({
      message: `Vendor ${vendor.companyName} deleted`,
    });

    res.json({ message: "Vendor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};