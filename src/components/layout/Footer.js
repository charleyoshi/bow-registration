import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='Footer'>
            <NavLink to="/">

                Bow Online Course Registration
            </NavLink>
            &nbsp;&nbsp;&nbsp; © 2023

        </div>
    )
}
