import Activity from "../models/Activity.js";

export const getActivities = async (req, res) => {
  try {
    const logs = await Activity.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};