import './TopNavbar.css'
import { Outlet, NavLink } from "react-router-dom"
// e.g. [About, Demo, Contact, Admin]

export const TopNavbar = ({ navs }) => {

    return (
        <div className="TopNavbar">
            <div>Bow online course registration</div>
            <nav>
                {navs.map(nav => {
                    if (nav == 'Home') {
                        return <NavLink key={nav} to="/">{nav}</NavLink>
                    }
                    else if (nav == 'Login'){
                        return <NavLink key={nav} to="/student">{nav}</NavLink>
                    } else if (nav == 'Admin'){
                        return <NavLink key={nav} to="/admin">{nav}</NavLink>
                    } else if (nav == 'Logout') {
                        return <NavLink key={nav} to="/">Logout</NavLink>
                    }
                })}
            </nav>
        </div>
    )
}



