import React from "react";
import { useParams } from "react-router-dom";

import CourseSelection from "../../data/courseSelection";

export default function Profile() {
  const { studentID } = useParams();

  return (
    <div>
      <h1>Student Profile</h1>
      <p>Student ID:{studentID} </p>
      <CourseSelection />
    </div>
  );
}
