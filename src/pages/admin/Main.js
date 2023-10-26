import React from 'react'
import LeftNavbar from '../../components/student/LeftNavbar'
import { TopNavbar } from '../../components/layout/TopNavbar'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <>
        <TopNavbar title="Bow online course registration - Admin" navs={["Home", "Logout"]} />
        <LeftNavbar/>
        <Outlet/>
    </>
  )
}
