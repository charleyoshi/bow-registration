import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  term: { type: Number, required: true },
  courseCode: { type: String, required: true, unique: true },
  courseName: { type: String, required: true, unique: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  courseFee: { type: Number, required: true },
  courseDescription: { type: String, required: true },
});

courseSchema.statics.addCourse = async function (courseData) {
  const { courseCode } = courseData;

  const existingCourse = await this.findOne({ courseCode });

  if (existingCourse) {
    throw Error("Course already exists.");
  }

  const course = await this.create(courseData);
  return course;
};

courseSchema.statics.removeCourse = async function (courseCode) {
  const course = await this.findOneAndDelete({ courseCode });
  return course;
};

courseSchema.statics.getCourseByTerm = async function (term) {
  const course = await this.find({ term });

  if (!course) {
    throw Error("Enquiry not found.");
  }

  return course;
};

courseSchema.statics.getAllCourses = async function () {
  const course = await this.find();
  return course;
};

export default mongoose.model("Course", courseSchema);
