import { Outlet } from "react-router-dom";
import "./CourseDisplay.css";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";

export const CoursesDisplay = (props) => {
  //const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/api/courses/")
  //     .then((response) => {
  //       if (response.status === 200) {
  //         console.log(response.data);

  //         setCourses(response.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching course data :(", error);
  //     });
  // }, []);

  const getCoursesByTerm = (term) => {
    return props.courses.filter((c) => c.term === term);
  };

  return (
    <div className="CourseDisplay">
      <div className="title">{props.title}</div>
      <div className="subtitle">{props.subtitle}</div>
      {props.forAdmin ? (
        <>
          <Term
            forAdmin={true}
            term={1}
            courses={getCoursesByTerm(1)}
            emptyMsg={props.emptyMsg}
            deleteCourse={props.deleteCourse}
          />
          <Term
            forAdmin={true}
            term={2}
            courses={getCoursesByTerm(2)}
            emptyMsg={props.emptyMsg}
            deleteCourse={props.deleteCourse}
          />
          <Term
            forAdmin={true}
            term={3}
            courses={getCoursesByTerm(3)}
            emptyMsg={props.emptyMsg}
            deleteCourse={props.deleteCourse}
          />
          <Term
            forAdmin={true}
            term={4}
            courses={getCoursesByTerm(4)}
            emptyMsg={props.emptyMsg}
            deleteCourse={props.deleteCourse}
          />
        </>
      ) : (
        <>
          <Term
            term={1}
            courses={getCoursesByTerm(1)}
            emptyMsg={props.emptyMsg}
            isEnrollment={props.isEnrollment}
            enroll={props.enroll}
            drop={props.drop}
            enrollments={props.enrollments}
            student={props.currentUserSID}
            showDropResult={props.showDropResult}
          />
          <Term
            term={2}
            courses={getCoursesByTerm(2)}
            emptyMsg={props.emptyMsg}
            isEnrollment={props.isEnrollment}
            enroll={props.enroll}
            drop={props.drop}
            enrollments={props.enrollments}
            student={props.currentUserSID}
            showDropResult={props.showDropResult}
          />
          <Term
            term={3}
            courses={getCoursesByTerm(3)}
            emptyMsg={props.emptyMsg}
            isEnrollment={props.isEnrollment}
            enroll={props.enroll}
            drop={props.drop}
            enrollments={props.enrollments}
            student={props.currentUserSID}
            showDropResult={props.showDropResult}
          />
          <Term
            term={4}
            courses={getCoursesByTerm(4)}
            emptyMsg={props.emptyMsg}
            isEnrollment={props.isEnrollment}
            enroll={props.enroll}
            drop={props.drop}
            enrollments={props.enrollments}
            student={props.currentUserSID}
            showDropResult={props.showDropResult}
          />
        </>
      )}
    </div>
  );
};

export const Term = (props) => {
  return (
    <div className="Term">
      <div className="termNumber">Term {props.term}</div>
      {props.forAdmin ? (
        <CourseList
          forAdmin={true}
          courses={props.courses}
          emptyMsg={props.emptyMsg}
          deleteCourse={props.deleteCourse}
        />
      ) : (
        <CourseList
          student={props.student}
          courses={props.courses}
          emptyMsg={props.emptyMsg}
          isEnrollment={props.isEnrollment}
          enroll={props.enroll}
          drop={props.drop}
          enrollments={props.enrollments}
          showDropResult={props.showDropResult}
        />
      )}
    </div>
  );
};

const CourseList = (props) => {
  return (
    <div className="CourseList">
      {props.courses && props.courses.length === 0 ? (
        <span style={{ fontSize: "smaller", color: "dimgrey" }}>
          {" "}
          {props.emptyMsg}{" "}
        </span>
      ) : props.forAdmin ? (
        props.courses.map((c) => (
          <CourseListItem
            course={c}
            key={c.courseCode}
            forAdmim={true}
            deleteCourse={props.deleteCourse}
          />
        ))
      ) : (
        props.courses.map((c) => (
          <CourseListItem
            SID={props.student}
            isEnrollment={props.isEnrollment}
            enroll={props.enroll}
            drop={props.drop}
            enrollments={props.enrollments}
            course={c}
            key={c.courseCode}
            showDropResult={props.showDropResult}
          />
        ))
      )}
    </div>
  );
};

export const CourseListItem = (props) => {
  const [open, setOpen] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState("");
  const [msgBoxClass, setMsgBoxClass] = useState("success");
  const handleDrop = () => {
    axios
      .delete(
        `/api/enrollments/remove/${props.SID}/${props.course.courseCode}/${props.course.term}`
      )
      .then(function (response) {
        //console.log(response);
        if (response.status === 200) {
          setMsgBoxClass("success");
          setShowMessageBox(true);
          setMessage("Success");
        } else {
          setMsgBoxClass("failure");
        }
      });
  };

  const handleDelete = () => {
    //console.log(props.course.courseCode);
    axios
      .delete(`/api/courses/remove/${props.course.courseCode}`)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setMsgBoxClass("success");
          setShowMessageBox(true);
          setMessage("Success");
        } else {
          setMsgBoxClass("failure");
        }
      });
  };

  return (
    <li className="CourseListItem" key={props.course.courseCode}>
      <div className="courseName" onClick={() => setOpen(!open)}>
        {props.course.courseName}{" "}
      </div>
      {open ? (
        <div className="collapsible-content">
          <div className="content-inner">
            <p>
              <b>Course Code:&nbsp;</b>
              {props.course.courseCode}
            </p>
            <p>
              <b>Start Date:&nbsp;</b>
              {props.course.startDate}
            </p>
            <p>
              <b>End Date:&nbsp;</b>
              {props.course.endDate}
            </p>
            <p>
              <b>Fee:&nbsp;</b>
              {props.course.courseFee}
            </p>
            <p>
              <b>Description: &nbsp;</b> <br />
              {props.course.courseDescription}
            </p>
          </div>
          {props.isEnrollment ? (
            <div className="buttonRow">
              <button className="button-3" onClick={handleDrop}>
                {" "}
                Drop{" "}
              </button>
            </div>
          ) : null}
          {props.forAdmim && !showMessageBox ? (
            <div className="buttonRow">
              <button className="button-3" onClick={handleDelete}>
                {" "}
                Delete{" "}
              </button>
            </div>
          ) : null}
          {showMessageBox ? (
            <div className={`content messageBox ${msgBoxClass}`}>
              {" "}
              {message}{" "}
            </div>
          ) : null}
        </div>
      ) : null}
    </li>
  );
};
