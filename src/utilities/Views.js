import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Profile from "../pages/student/Profile";

import LeftNavbar from "../components/layout/LeftNavbar";
import { Home } from "../pages/Home";
import { TopNavbar } from "../components/layout/TopNavbar";
import StudentMain from "../pages/student/Main";
import AdminMain from "../pages/admin/Main";

import MyCourses from "../pages/student/MyCourses";
import AddCourses from "../pages/student/AddCourses";
import Search from "../pages/student/Search";



export default function Views(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="student" element={<StudentMain allCourses={props.allCourses} studentUsers={props.studentUsers} addStudentUser={props.addStudentUser} enroll={props.enroll} enrollments={props.enrollments} hasEnrolled={props.hasEnrolled} drop={props.drop}/>}>
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
          <Route path="mycourses" element={<MyCourses />} />
          <Route path="addcourses" element={<AddCourses />} />
          <Route index element={<Navigate to="profile" replace />} />
        </Route>

        <Route path="admin" element={<AdminMain allCourses={props.allCourses} studentUsers={props.studentUsers} admins={props.admins}/>}>

          <Route path="search" element={<Search />} />
          <Route index element={<Navigate to="search" replace />} />
        </Route>

        {/* <Route
          path="student/profile/:studentID"
          element={<Profile />} //   element={<Navigate to="student/profile/:studentID" />}
        /> */}
      </Routes>
    </>
  );
}
