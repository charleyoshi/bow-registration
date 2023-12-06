import React, { useEffect, useState } from "react";
import "./StudentProfile.css";
import { CoursesDisplay } from "../course/CoursesDisplay";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
//import enrollment from "../../../../Backend/dbModels/enrollment";

export default function StudentProfile(props) {
  const [enrollments, setEnrollments] = useState([]);
  const student = props.info;
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  //const courseByUsewr = [];
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

  useEffect(() => {
    axios
      .get("/api/student")
      .then((response) => {
        if (response.status === 200) {
          //console.log(response.data);

          setStudents(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching course data :(", error);
      });
  }, []);

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

  // const enrollmentsByUser = enrollments.filter(
  //   (e) => e.studentID == students.studentID
  // );
  // console.log("enrollmentsByUser", enrollmentsByUser);
  // console.log("students", students);
  // console.log("enrollments", enrollments);
  // console.log("courses", courses);

  // const coursesByUser = courses.filter((o) =>
  //   enrollmentsByUser.some(({ courseCode }) => o.courseCode === courseCode)
  // );

  // const getCoursesByUser = (students, enrollments, courses) => {
  //   const coursesByUser = [];
  //   for (let i = 0; i < students.length; i++) {
  //     const student = students[i];
  //     const enrollmentsByUser = enrollments.filter(
  //       (e) => e.studentID == student.studentID
  //     );
  //     const coursesByUser = courses.filter((o) =>
  //       enrollmentsByUser.some(({ courseCode }) => o.courseCode === courseCode)
  //     );
  //     coursesByUser.push(coursesByUser);
  //   }
  //   return coursesByUser;
  // };

  // const coursesByUser = getCoursesByUser(students, enrollments, courses);

  // console.log("coursesByUser", coursesByUser);

  // console.log("coursesByUser", coursesByUser);
  const handleExpand = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className="StudentProfile">
      <div className="personal">
        <h1 className="header" onClick={handleExpand}>
          {" "}
          {student.firstName} {student.lastName}, {student.studentID}
        </h1>
        <br />
        <h3> Department: {student.department}</h3>
        <h4> Email: {student.email}</h4>
      </div>
      {/* <div className="courses">
        {showDetail ? (
          <>
            <h2>Enrolled Courses</h2>
            <br />
            <CoursesDisplay
              forAdmin={false}
              //courses={coursesByUser}
              emptyMsg="No matched results."
            />
          </>
        ) : null}
      </div> */}
    </div>
  );
}
