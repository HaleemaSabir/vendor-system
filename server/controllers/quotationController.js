import Quotation from "../models/Quotation.js";
import Activity from "../models/Activity.js";

/* =====================
   CREATE QUOTATION
===================== */
export const addQuotation = async (req, res) => {
  try {
    const quotation = await Quotation.create(req.body);
    res.status(201).json(quotation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  await Activity.create({
  message: `Quotation ${quotation.title} created`
});
};

/* =====================
   GET ALL QUOTATIONS
===================== */
export const getQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.find().populate("vendor");
    res.json(quotations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =====================
   UPDATE STATUS
===================== */
export const updateQuotationStatus = async (req, res) => {
  try {
    const quotation = await Quotation.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(quotation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  await Activity.create({
  message: `Quotation status changed to ${req.body.status}`
});
};
export const deleteQuotation = async (req, res) => {
  try {
    const quotation = await Quotation.findByIdAndDelete(req.params.id);

    if (!quotation) {
      return res.status(404).json({ message: "Quotation not found" });
    }

    res.json({ message: "Quotation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};