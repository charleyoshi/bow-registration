import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    studentID: { type: Number, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

enquirySchema.statics.addEnquiry = async function (enquiryData) {
  const { studentID } = enquiryData;
  const { subject } = enquiryData;
  const { message } = enquiryData;
  const { phone } = enquiryData;

  if (!subject || !message || !phone) throw Error("Missing enquiry data.");

  const existingEnquiry = await this.findOne({ studentID, subject, phone });

  if (existingEnquiry) {
    throw Error("Enquiry already exists.");
  }

  const enquiry = await this.create(enquiryData);
  return enquiry;
};

enquirySchema.statics.getAnEnquiry = async function (phone) {
  const enquiry = await this.find({ phone });

  if (!enquiry) {
    throw Error("Enquiry not found.");
  }

  return enquiry;
};

enquirySchema.statics.getAllEnquiries = async function () {
  const enquiries = await this.find();
  return enquiries;
};

export default mongoose.model("Enquiry", enquirySchema);
