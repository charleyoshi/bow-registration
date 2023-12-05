// Not used in Assignment 1

import React, { useLayoutEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import './TopNavbar.css';

export default function RootLayout({title}) {
  return (
    <>
      <div className="TopNavbar">
        <div>{title}</div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/contact">Login</NavLink>
          <NavLink to="/login">Admin</NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  )
}
