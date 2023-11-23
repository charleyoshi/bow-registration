import express from "express";
import Enquiry from "../dbModels/enquiry.js";

const router = express.Router();

// create new enquiry (IMPORTANT: only works after you have imported the enquiry model)
router.post("/", async (req, res) => {
  const { studentID, subject, message, phone } = req.body;

  try {
    const enquiry = await Enquiry.addEnquiry({
      studentID,
      subject,
      message,
      phone,
    });
    res.status(200).json(enquiry);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.getAllEnquiries();
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/:phone", async (req, res) => {
  const { phone } = req.params;

  if (!phone) {
    res.status(404).json({ error: "Missing phone number." });
    return;
  }

  try {
    const enquiry = await Enquiry.getAnEnquiry(phone);
    res.status(200).json(enquiry);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
