import express from "express";
import Student from "../dbModels/student.js";

const router = express.Router();

//login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const student = await Student.login(username, password);

    res.status(200).json({ student: student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//signup route
router.post("/signup", async (req, res) => {
  const inputs = req.body;

  if (!inputs || Object.keys(inputs).length === 0) {
    return res.status(400).json({ error: "inputs not found" });
  }

  try {
    const student = await Student.signup(inputs);

    res.status(201).json({ student: student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// get student by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const student = await Student.findOne({ studentID: id });

  if (!student) {
    return res.status(404).json({ error: "No such student." });
  }

  res.status(200).json(student);
});

// get all students
router.get("/", async (req, res) => {
  const students = await Student.find({});
  res.status(200).json(students);
});

export default router;
