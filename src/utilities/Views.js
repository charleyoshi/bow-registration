import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Profile from "../pages/student/Profile";
import Enroll from "../pages/student/Enroll";
import LeftNavbar from "../components/student/LeftNavbar";
import { Home } from "../pages/Home";
import AdminSignIn from "../pages/admin/Signin";
import StudentSignIn from "../pages/student/Signin";
import { TopNavbar } from "../components/layout/TopNavbar";
import StudentMain from "../pages/student/Main";
import AdminMain from "../pages/admin/Main";

export default function Views() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin/sign-in" element={<AdminSignIn />} />
        <Route path="student/sign-in" element={<StudentSignIn />} />

        <Route path="student" element={<StudentMain />}>
          <Route path="profile" element={<Profile />} />
          <Route path="enroll" element={<Enroll />} />
        </Route>

        <Route path="admin" element={<AdminMain />}>
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route
          path="student/profile/:studentID"
          element={<Profile />} //   element={<Navigate to="student/profile/:studentID" />}
        />
      </Routes>
    </>
  );
}
