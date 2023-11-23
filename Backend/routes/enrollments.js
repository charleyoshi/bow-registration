import express from "express";
import Enrollment from "../dbModels/enrollment.js";

const router = express.Router();

// Add Enrollment Route

router.post("/add", async (req, res) => {
  const enrollmentData = req.body;

  try {
    const enrollment = await Enrollment.addEnrollment(enrollmentData);
    res.status(201).json({ enrollment: enrollment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Drop Enrollment Route

router.delete("/remove/:studentID/:courseCode/:term", async (req, res) => {
  const { studentID, courseCode, term } = req.params;

  try {
    const droppedEnrollment = await Enrollment.removeEnrollment(
      studentID,
      courseCode,
      term
    );
    if (!droppedEnrollment) {
      return res.status(404).json({ error: "Enrollment not found." });
    }
    res.status(200).json({ droppedEnrollment: droppedEnrollment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Enrollment Route

router.get("/:studentID", async (req, res) => {
  const { studentID } = req.params;

  try {
    const enrollment = await Enrollment.getEnrollment(studentID);
    if (!enrollment) {
      return res.status(404).json({ error: "Enrollment not found." });
    }
    res.status(200).json({ enrollment: enrollment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
