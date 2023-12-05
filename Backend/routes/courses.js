import express from "express";
import Course from "../dbModels/course.js";
import course from "../dbModels/course.js";

const router = express.Router();

// Add Course Route
router.post("/add", async (req, res) => {
  const courseData = req.body;

  try {
    const course = await Course.addCourse(courseData);
    res.status(201).json({ course: course });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Drop Course Route
router.delete("/remove/:courseCode", async (req, res) => {
  const { courseCode } = req.params;

  try {
    const droppedCourse = await Course.removeCourse(courseCode);
    if (!droppedCourse) {
      return res.status(404).json({ error: "Course not found." });
    }
    res.status(200).json({ droppedCourse: droppedCourse });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:term", async (req, res) => {
  const { term } = req.params;

  // if (!phone) {
  //   res.status(404).json({ error: "Missing phone number." });
  //   return;
  // }

  try {
    const courses = await Course.getCourseByTerm(term);
    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const courses = await Course.getAllCourses();
    res.status(200).json(courses);
    // console.log(courses);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
