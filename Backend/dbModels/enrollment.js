import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  studentID: { type: Number, required: true },
  term: { type: Number, required: true },
  courseCode: { type: String, required: true },
});

enrollmentSchema.statics.addEnrollment = async function (enrollmentData) {
  const { studentID } = enrollmentData;
  const { courseCode } = enrollmentData;
  const { term } = enrollmentData;

  if (!studentID || !courseCode || !term)
    throw Error("Missing enrollment data.");

  const existingEnrollment = await this.findOne({
    studentID,
    courseCode,
    term,
  });

  if (existingEnrollment) {
    throw Error("Enrollment already exists.");
  }

  const enrollment = await this.create(enrollmentData);
  return enrollment;
};

enrollmentSchema.statics.removeEnrollment = async function (
  studentID,
  courseCode,
  term
) {
  const enrollment = await this.findOneAndDelete({
    studentID,
    courseCode,
    term,
  });
  return enrollment;
};

enrollmentSchema.statics.getEnrollment = async function (studentID) {
  const enrollment = await this.find({ studentID });

  if (
    !enrollment ||
    enrollment.length === 0 ||
    enrollment === undefined ||
    enrollment === null ||
    enrollment === "" ||
    enrollment == []
  ) {
    throw Error("Enrollment not found.");
  }
  return enrollment;
};

enrollmentSchema.statics.getAllEnrollment = async function () {
  const enrollment = await this.find();
  return enrollment;
};

export default mongoose.model("Enrollment", enrollmentSchema);
