import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { CoursesDisplay } from "../../components/course/CoursesDisplay";

export default function MyCourses() {

  const [studentUsers, currentUserSID, allCourses, enroll, enrollments, hasEnrolled, drop] = useOutletContext();
  const [user] = studentUsers.filter(u => u.studentID === currentUserSID)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState()
  const [messageColor, setMessageColor] = useState()
  const enrollmentsByUser = enrollments.filter(e => e.studentID === currentUserSID) // {studentID: 10000, term: 1, courseCode: 'C++'}
  const coursesByUser = allCourses.filter(o => enrollmentsByUser.some(({ courseCode }) => o.courseCode === courseCode));

  const showResult = (result) => {
    if (result.status === "warning") {
      setMessageColor("orange")
    } else {
      setMessageColor("green")
    }
    setShowMessage(true)

    setMessage(result.message)
  }

  return (
    <>
      <br />
      {showMessage ?
        <div className="dropPageMessage" style={{ "color": messageColor }}>{message}</div> : null}

      <CoursesDisplay title="My Courses"
        subtitle="Below are all of your enrolled courses."
        courses={coursesByUser}
        emptyMsg="You haven't enrolled in any courses in this term."
        drop={drop}
        enrollments={enrollments}
        currentUserSID={currentUserSID}
        isEnrollment={true}
        showDropResult={showResult}
      />
    </>

  )
}
