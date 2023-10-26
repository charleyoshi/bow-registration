
import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Profile from '../pages/student/Profile'
import Enroll from '../pages/student/Enroll'
import LeftNavbar from '../components/student/LeftNavbar'
import { Home } from '../pages/Home'
import AdminSignIn from '../pages/admin/Signin';
import StudentSignIn from '../pages/student/Signin';
import { TopNavbar } from '../components/layout/TopNavbar'
import Main from '../pages/student/Main'


export default function Views() {
    return (
        <>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="admin/sign-in" element={<AdminSignIn />} />
                <Route path="student/sign-in" element={<StudentSignIn />} />

                <Route path="student" element={<Main/>} >
                    <Route path="profile" element={<Profile />} />
                    <Route path="enroll" element={<Enroll />} />
                </Route>

                <Route path="*" element={<Navigate to="student/profile" />} />
            </Routes>
        </>
    )
}

