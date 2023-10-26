import React from 'react'
import LeftNavbar from '../../components/student/LeftNavbar'
import { TopNavbar } from '../../components/layout/TopNavbar'
import { Outlet, useLocation } from 'react-router-dom'

export default function Main() {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <TopNavbar title="Bow online course registration - Admin" navs={["Home", "Logout"]} />
      <LeftNavbar user="admin" />

      <div>
        Welcome to the admin page. 
      </div>
    </>
  )
}
