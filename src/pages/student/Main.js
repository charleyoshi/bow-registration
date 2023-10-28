import './Main.css'
import React, { useEffect, useState } from 'react'
import LeftNavbar from '../../components/layout/LeftNavbar'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { TopNavbar } from '../../components/layout/TopNavbar'
import Profile from './Profile'
import MyCourses from './MyCourses'
import AddCourses from './AddCourses'
import StudentLoginForm from '../../components/input/form/StudentLoginForm'
import StudentRegisterForm from '../../components/input/form/StudentRegisterForm'
import { checkCredentials, checkRegister } from '../../utilities/helper'

// props:
//allCourses={props.allCourses} studentUsers={props.studentUsers} addStudentUser={() => props.addStudentUser()} enroll={props.enroll} enrollments={props.enrollments}
export default function Main(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState()
  const [showLogin, setShowLogin] = useState(true)


  const loginUser = (id) => {
    setIsLoggedIn(true)
    setCurrentUser(id)
  }


  return (
    <>
      {isLoggedIn ?
        <>

          <TopNavbar title="Bow online course registration" navs={["Home", "Logout"]} />
          <div className='wrapper'>
            <div className="col left">
              <LeftNavbar className="left" isStudent={true} user={currentUser} />
            </div>
            <div className="col right">
              <Outlet context={[props.studentUsers, currentUser, props.allCourses, props.enroll, props.enrollments, props.hasEnrolled, props.drop]} />
            </div>
          </div>

        </>
        :
        <>
          <TopNavbar navs={["Home", "Login", "Admin"]} />
          {showLogin ?
            <StudentLoginForm onSubmit={checkCredentials} credentials={props.studentUsers} loginUser={loginUser} />
            : <StudentRegisterForm onSubmit={checkRegister} credentials={props.studentUsers} addStudentUser={props.addStudentUser} loginUser={loginUser} />
          }
          <div>
            {showLogin && !isLoggedIn ?
              <p>Don’t have an account yet?<br /><br />
                <strong style={{ color: "#ff895d", cursor: "pointer" }} onClick={() => setShowLogin(false)}>Sign up</strong> first.</p> :
              <p>Already have an account?<br /><br />
                <strong style={{ color: "#007cb9", cursor: "pointer" }} onClick={() => setShowLogin(true)}>Login</strong> instead</p>}
            <br /><br /><br /><br />
          </div>
        </>
      }

    </>

  )
}
