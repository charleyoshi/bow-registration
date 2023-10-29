import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, useLocation } from 'react-router-dom'
import { allCourses0 } from './data/course';
import Views from './utilities/Views';


var studentUsers0 = [{
  firstName: "Jerry", lastName: "Jam", password: "p", username: "jerry", confirmPassword: "",
  email: "e", dob: "d", department: "d", program: "Diploma", studentID: 10000
},
{
  firstName: "Leslie", lastName: "Knope", password: "a", username: "leslie", confirmPassword: "",
  email: "e", dob: "d", department: "d", program: "Certificate (3-months)", studentID: 9999
},
{
  firstName: "Tom", lastName: "Haverford", password: "tom", username: "tom", confirmPassword: "",
  email: "tom@tom.com", dob: "d", department: "d", program: "Diploma", studentID: 9998
},

{
  firstName: "Ann", lastName: "Perkins", password: "ann", username: "ann", confirmPassword: "",
  email: "annnnnn", dob: "d", department: "d", program: "Post-Diploma", studentID: 9997
},

{
  firstName: "Chris", lastName: "Traeger", password: "chris", username: "chris", confirmPassword: "",
  email: "chris.com", dob: "d", department: "d", program: "Certificate (6-months)", studentID: 9996
},


]

const admins = [{ username: "adminJerry", password: "adM1n" }, { username: "adminBadboy", password: "adM!n" }]

function App() {
  const [enrollments, setEnrollments] = useState([{studentID: 9998, term: 1, courseCode: "Pr111"}, {studentID: 9998, term: 1, courseCode: "C++111"},{studentID: 9998, term: 4, courseCode: "Pro444"},])
  const [allCourses, setAllCourses] = useState(allCourses0);
  const [studentUsers, setStudentUsers] = useState(studentUsers0);
  const [counters, setCounters] = useState([{ count: 0 }, { count: 0 }, { count: 0 }]);

  const addCourse = (newCourse) => {
    setAllCourses(allCourses => [...allCourses, newCourse])
    console.log('all', allCourses)
  }

  const deleteCourse = (courseCode) => {

    setAllCourses(allCourses.filter(c => c.courseCode !== courseCode))

    return allCourses.length
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
    return { status: "sucess", message: "Register successful!" }


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
    return { status: "sucess", message: "You have dropped the course successfully." }
  }

  const hasEnrolled = (studentID, course) => {
    const newEnrollment = { studentID: studentID, term: course.term, courseCode: course.courseCode }
    const alreadyExist = enrollments.some(item => Object.entries(item).toString() === Object.entries(newEnrollment).toString())
    if (alreadyExist) {
      return true
    } return false
  }

  return (

    <BrowserRouter>
      <Views addCourse={addCourse} admins={admins} allCourses={allCourses} studentUsers={studentUsers} addStudentUser={addStudentUser} enroll={enroll} enrollments={enrollments} hasEnrolled={hasEnrolled} drop={drop} deleteCourse={deleteCourse} />

      <footer> Hi this is footer</footer>

    </BrowserRouter>

  );
}

export default App;



// User Authen and Router :
//   Todo: research on auth and user and routing
//   should i use other people's library
//   do i have to build my own
