import "dotenv/config";

import express from "express";
import mongoose from "mongoose";

// routes
import studentRoutes from "./routes/student.js";
import adminRoutes from "./routes/admin.js";
import courseRoutes from "./routes/courses.js";
import enrollmentRoutes from "./routes/enrollments.js";
import enquiryRoutes from "./routes/enquiries.js";

// express app
const app = express();

// middleware: fire every time receive a request. Fire BEFORE the route to the root path ('/')
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/student", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/enquiries", enquiryRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        `connected to db & listening on port ${process.env.PORT}!!!!`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
