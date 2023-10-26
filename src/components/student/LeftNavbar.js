import React from 'react'
import './LeftNavbar.css'
import { NavLink } from 'react-router-dom'
export default function LeftNavbar({ user }) {
    return (
        <div className="LeftNavbar">
            <h3 className="menu">Menu</h3>
            <nav>
                {user == 'student' ?
                    <>
                        <NavLink to="profile">Profile</NavLink>
                        <NavLink to="enroll">Course Selection</NavLink>
                        <NavLink to="/">Logout</NavLink>
                    </> :
                    <>
                        <NavLink to="admin/profile">Profile</NavLink>
                        <NavLink to="/">Add New Course</NavLink>
                        <NavLink to="/">Search</NavLink>
                        <NavLink to="/">View Students</NavLink>
                        <NavLink to="/">Logout</NavLink>
                    </>}
            </nav>
        </div>

    )
}
