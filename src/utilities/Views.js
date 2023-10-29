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
import Search from "../pages/Search";
import NewCourse from "../pages/admin/NewCourse";
import ViewStudents from "../pages/admin/ViewStudents";
import Enquire from "../pages/student/Enquire";
import ViewEnquiries from "../pages/admin/ViewEnquiries";



export default function Views(props) {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="enquire" element={<Enquire sendEnquiry={props.sendEnquiry}/>} />

        <Route path="student" element={<StudentMain allCourses={props.allCourses} studentUsers={props.studentUsers} addStudentUser={props.addStudentUser} enroll={props.enroll} enrollments={props.enrollments} hasEnrolled={props.hasEnrolled} drop={props.drop} sendEnquiry={props.sendEnquiry} />}>
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
          <Route path="mycourses" element={<MyCourses />} />
          <Route path="addcourses" element={<AddCourses />} />
          <Route path="enquire" element={<Enquire />} />
          <Route index element={<Navigate to="profile" replace />} />
        </Route>

        <Route path="admin" element={<AdminMain deleteCourse={props.deleteCourse} addCourse={props.addCourse} allCourses={props.allCourses} studentUsers={props.studentUsers} admins={props.admins} enrollments={props.enrollments} enquiries={props.enquiries} />}>
          <Route path="search" element={<Search />} />
          <Route path="newcourse" element={<NewCourse />} />
          <Route path="viewstudents" element={<ViewStudents />} />
          <Route path="viewenquiries" element={<ViewEnquiries />} />
          <Route index element={<Navigate to="search" replace />} />
        </Route>

      </Routes>
    </>
  );
}
