import React, { useState } from 'react'
import './Enrollment.css'

export default function EnrollTerm(props) {
  const courses = props.courses.filter(c => c.term === Number(props.term))

  return (
    <div className="Term">
      <div className="termNumber">Term {props.term}</div>
      <div className="CourseList">
        {courses.map(c =>
          <EnrollListItem course={c} enroll={props.enroll} SID={props.SID} key={c.courseCode} hasEnrolled={props.hasEnrolled} drop={props.drop} />

        )}
      </div>
    </div>
  )
}


const EnrollListItem = ({ course, enroll, SID, enrollments, hasEnrolled, drop }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(false);
  const [messageColor, setMessageColor] = useState("green")
  
  const handleClick = () => {
    const result = enroll(SID, course)
    if (result.status === 'fail') {
      setMessageColor("red")
    }
    setMessage(result.message)
    setShowMessage(true)
  }


  return (
    <li className="CourseListItem" key={course.courseCode}>
      <div className="content-inner">
        <p><b>Course Name:&nbsp;</b>
          {course.courseName}</p>
        <p><b>Course Code:&nbsp;</b>
          {course.courseCode}</p>
        <p><b>Fee:&nbsp;</b>
          {course.courseFee}</p>
        <p><b>Description: &nbsp;</b> <br />
          {course.courseDescription}{course.courseDescription}{course.courseDescription}{course.courseDescription}</p>
      </div>
      <div className="buttonRow">

        {hasEnrolled(SID, course) ?
          <button disabled>Registered</button> :
          <button className="button-2" onClick={handleClick} > Register </button>

        }
        {showMessage ? <span style={{ "color": messageColor }}>{message}</span> : null}
      </div>




    </li>
  )
}
