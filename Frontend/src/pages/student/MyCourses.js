import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { CoursesDisplay } from "../../components/course/CoursesDisplay";
import axios from "axios";

export default function MyCourses() {
  // const [studentUsers, currentUserSID, allCourses, enroll, enrollments, hasEnrolled, drop] = useOutletContext();
  const [
    isStudent,
    studentUsers,
    currentUserSID,
    allCourses,
    enroll,
    hasEnrolled,
    drop,
  ] = useOutletContext();
  const [user] = studentUsers.filter((u) => u.studentID === currentUserSID);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState();
  const [messageColor, setMessageColor] = useState();
  const [enrollments, setEnrollments] = useState([]);
  const [courses, setCourses] = useState([]);

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

  const enrollmentsByUser = enrollments.filter(
    (e) => e.studentID === currentUserSID.studentID
  ); // {studentID: 10000, term: 1, courseCode: 'C++'}

  const coursesByUser = courses.filter((o) =>
    enrollmentsByUser.some(({ courseCode }) => o.courseCode === courseCode)
  );

  const showResult = (result) => {
    if (result.status === "warning") {
      setMessageColor("orange");
    } else {
      setMessageColor("green");
    }
    setShowMessage(true);

    setMessage(result.message);
  };

  return (
    <>
      <br />
      {showMessage ? (
        <div className="dropPageMessage" style={{ color: messageColor }}>
          {message}
        </div>
      ) : null}

      <CoursesDisplay
        title="My Courses"
        subtitle="Below are all of your enrolled courses."
        courses={coursesByUser}
        emptyMsg="You haven't enrolled in any courses in this term."
        drop={drop}
        enrollments={enrollments}
        currentUserSID={currentUserSID.studentID}
        isEnrollment={true}
        showDropResult={showResult}
      />
    </>
  );
}
