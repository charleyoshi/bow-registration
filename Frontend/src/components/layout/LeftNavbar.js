import React from 'react'
import './LeftNavbar.css'
import { NavLink } from 'react-router-dom'
export default function LeftNavbar(props) {
    const isStudent = props.isStudent
    return (
        <div className="LeftNavbar">
            {isStudent ? <h3 className="menu">{props.user.firstName} {props.user.lastName}</h3> :
                <h3 className="menu">{props.user}</h3>
            }
            <br />
            <nav>
                {isStudent ?
                    <>

                        <NavLink to="profile">Profile</NavLink>
                        <NavLink to="search">Search</NavLink>
                        <NavLink to="mycourses">My Courses</NavLink>
                        <NavLink to="addcourses">Add Courses</NavLink>
                        <NavLink to="enquire">Enquire</NavLink>
                    </> :
                    <>  
                        <NavLink to="search">Search</NavLink>
                        <NavLink to="newcourse">Add New Course</NavLink>
                        <NavLink to="viewstudents">View Students</NavLink>
                        <NavLink to="viewenquiries">View Enquiries</NavLink>
                        
                        
                        <NavLink to="/">Logout</NavLink>
                    </>}
            </nav>
        </div>

    )
}
