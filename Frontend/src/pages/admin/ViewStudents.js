import React, { useEffect, useState } from "react";
import "./ViewStudents.css";
import { useOutletContext } from "react-router-dom";
import StudentProfile from "../../components/admin/StudentProfile";
import { PROGRAMS } from "../../data/data";
import axios from "axios";

export default function ViewStudents() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    axios
      .get("/api/courses/")
      .then((response) => {
        if (response.status === 200) {
          //console.log(response.data);

          setCourses(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching course data :(", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/student")
      .then((response) => {
        if (response.status === 200) {
          // console.log(response.data);

          setStudents(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching course data :(", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/enrollments")
      .then((response) => {
        if (response.status === 200) {
          //console.log(response.data);

          setEnrollments(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching course data :(", error);
      });
  }, []);

  const contexts = useOutletContext();
  //const enrollments = contexts[5];

  //   const enrollmentsByUser = enrollments.filter(
  //     (e) => e.studentID == students.studentID
  //   );

  //   console.log(enrollments);
  //   console.log(students);
  //   console.log(enrollmentsByUser);

  const [programType, setProgramType] = useState(PROGRAMS[0]);

  return (
    <div className="ViewStudents">
      <br />
      <div className="btn-group">
        <button
          className="button-1 active"
          value={PROGRAMS[0]}
          onClick={(e) => setProgramType(e.target.value)}
        >
          Diploma
        </button>
        <button
          className="button-1"
          value={PROGRAMS[1]}
          onClick={(e) => setProgramType(e.target.value)}
        >
          Post-diploma
        </button>
        <button
          className="button-1"
          value={PROGRAMS[2]}
          onClick={(e) => setProgramType(e.target.value)}
        >
          Certificate (3 months)
        </button>
        <button
          className="button-1"
          value={PROGRAMS[3]}
          onClick={(e) => setProgramType(e.target.value)}
        >
          Certificate (6 months)
        </button>
      </div>
      <h1 className="program-header"> {programType} </h1>
      {students
        .filter((s) => s.program === programType)
        .map((s) => (
          <StudentProfile
            info={s}
            enrollments={enrollments}
            allCourses={courses}
          />
        ))}
    </div>
  );
}
