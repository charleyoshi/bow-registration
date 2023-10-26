import React from 'react'
import './LeftNavbar.css'
import { NavLink } from 'react-router-dom'
export default function LeftNavbar() {
    return (
        <div className="LeftNavbar">
            <h3 className="menu">Menu</h3>
            <nav>
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="enroll">Course Selection</NavLink>
                <NavLink to="/">Logout</NavLink>
            </nav>
        </div>

    )
}
