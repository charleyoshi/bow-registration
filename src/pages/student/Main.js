import React from 'react'
import LeftNavbar from '../../components/student/LeftNavbar'
import { Outlet } from 'react-router-dom'
import { TopNavbar } from '../../components/layout/TopNavbar'
// Not used?
var user = {}
export default function Main() {

  return (
    <>
        <TopNavbar title="Bow online course registration" navs={["Home", "Logout"]} />
        <LeftNavbar/>
        <Outlet/>


    </>
    
    
  )
}
