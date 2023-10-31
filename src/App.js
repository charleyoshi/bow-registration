import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, useLocation } from 'react-router-dom'
import { admins, allCourses0, enquiries0, enrollments0, studentUsers0 } from './data/data';
import Views from './utilities/Views';
import Footer from './components/layout/Footer';




function App() {
  const [enquiries, setEnquiries] = useState(enquiries0)
  const [enrollments, setEnrollments] = useState(enrollments0)
  const [allCourses, setAllCourses] = useState(allCourses0);
  const [studentUsers, setStudentUsers] = useState(studentUsers0);
  const [counters, setCounters] = useState([{ count: 0 }, { count: 0 }, { count: 0 }]);

  const addCourse = (newCourse) => {
    setAllCourses(allCourses => [...allCourses, newCourse])
  }

  const deleteCourse = (courseCode) => {
    try {
      setAllCourses(allCourses.filter(c => c.courseCode !== courseCode))
      return { success: true, message: "You have successfully deleted this course." }
    } catch (e) {
      return { success: false, message: "Something was wrong: " + e.message }
    }



  }

  const addStudentUser = (newUser) => {
    setStudentUsers(oldUsers => [...oldUsers, newUser]);
  }

  const enroll = (studentID, course) => {
    const newEnrollment = { studentID: studentID, term: course.term, courseCode: course.courseCode }

    //  fetch all courses from user , check for program
    const user = studentUsers.filter(s => s.studentID === studentID)[0] //{}
    const isCertStudent = user.program.toLowerCase().includes("certificate")

    var maximum = 5
    let alreadyEnrolledIn = enrollments.filter(u => u.studentID === studentID && u.term === course.term)  //[]
    if (isCertStudent) {
      // Certificate student can take only one course and get certified at one time
      maximum = 1
      alreadyEnrolledIn = enrollments.filter(u => u.studentID === studentID)
    }

    if (alreadyEnrolledIn.length >= maximum) {
      return { status: "fail", message: "You have enrolled maximum number of courses. If you want to register for this course, you must drop other courses first." }
    }
    setEnrollments([...enrollments, newEnrollment])
    return { status: "success", message: "Register successful!" }


  }

  const drop = (studentID, course) => {
    var minimum = 2
    //  fetch all courses from user , check for program
    const user = studentUsers.filter(s => s.studentID === studentID)[0] //{}
    const isCertStudent = user.program.toLowerCase().includes("certificate")

    let alreadyEnrolledIn = enrollments.filter(u => u.studentID === studentID && u.term === course.term)  //[]
    if (isCertStudent) {
      // Certificate student can take only one course and get certified at one time
      minimum = 0
      alreadyEnrolledIn = enrollments.filter(u => u.studentID === studentID)
    }
    const filteredArray = enrollments.filter(e => e.studentID !== studentID || e.courseCode !== course.courseCode);
    setEnrollments(filteredArray)
    if (alreadyEnrolledIn.length <= minimum) {
      return { status: "warning", message: "Warning: You are currently under-credit. Please make sure you take enough credits for graduation requirement." }
    }
    return { status: "success", message: "You have dropped the course successfully." }
  }

  const hasEnrolled = (studentID, course) => {
    const newEnrollment = { studentID: studentID, term: course.term, courseCode: course.courseCode }
    const alreadyExist = enrollments.some(item => Object.entries(item).toString() === Object.entries(newEnrollment).toString())
    if (alreadyExist) {
      return true
    } return false
  }

  const sendEnquiry = (inquiry) => {
    try {
      setEnquiries([...enquiries, inquiry])
      return { success: true, message: "Inquiry form has been successfully sent." }
    } catch (e) {
      return { success: false, message: "Inquiry form cannot be sent." }
    }

  }
  return (

    <BrowserRouter>
      <Views addCourse={addCourse} admins={admins} allCourses={allCourses} studentUsers={studentUsers} addStudentUser={addStudentUser} enroll={enroll} enrollments={enrollments} hasEnrolled={hasEnrolled} drop={drop} deleteCourse={deleteCourse} sendEnquiry={sendEnquiry} enquiries={enquiries} />

      <Footer />

    </BrowserRouter>

  );
}

export default App;


