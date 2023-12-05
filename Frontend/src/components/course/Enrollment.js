import React, { useEffect, useState } from "react";
import "./Enrollment.css";
import axios from "axios";

export default function EnrollTerm(props) {
  const [courses, setCourses] = useState([]);

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

  const termCourse = courses.filter((c) => c.term === Number(props.term));

  return (
    <div className="Term">
      <div className="termNumber">Term {props.term}</div>
      <div className="CourseList">
        {termCourse.map((c) => (
          <EnrollListItem
            course={c}
            enroll={props.enroll}
            SID={props.SID}
            key={c.courseCode}
            hasEnrolled={props.hasEnrolled}
            drop={props.drop}
          />
        ))}
      </div>
    </div>
  );
}

const EnrollListItem = ({
  course,
  enroll,
  SID,
  enrollments,
  hasEnrolled,
  drop,
}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(false);
  const [messageColor, setMessageColor] = useState("green");

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .post("/api/enrollments/add", {
        studentID: SID,
        courseCode: course.courseCode,
        term: course.term,
      })
      .then(function (enroll) {
        //console.log(enroll);
        if (enroll.status === 201) {
          //console.log("student enrolled in course: ");
          setShowMessage(true);
          setMessageColor("green");
          setMessage("Success");
        } else {
          //console.log("student not enrolled in course: ");
          setShowMessage(true);
          setMessageColor("red");
          setMessage("failure");
        }
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  };

  return (
    <li className="CourseListItem" key={course.courseCode}>
      <div className="content-inner">
        <p>
          <b>Course Name:&nbsp;</b>
          {course.courseName}
        </p>
        <p>
          <b>Course Code:&nbsp;</b>
          {course.courseCode}
        </p>
        <p>
          <b>Fee:&nbsp;</b>
          {course.courseFee}
        </p>
        <p>
          <b>Term:&nbsp;</b>
          {course.term}
        </p>
        <p>
          <b>Description: &nbsp;</b> <br />
          {course.courseDescription}
          {course.courseDescription}
          {course.courseDescription}
          {course.courseDescription}
        </p>
      </div>
      <div className="buttonRow">
        {/* {hasEnrolled(SID, course) ? (
          <button disabled>Registered</button>
        ) : (
          <button className="button-2" onClick={handleClick}>
            {" "}
            Register{" "}
          </button>
        )} */}

        <button className="button-2" onClick={handleClick}>
          {" "}
          Register{" "}
        </button>
        {showMessage ? (
          <span style={{ color: messageColor }}>{message}</span>
        ) : null}
      </div>
    </li>
  );
};
