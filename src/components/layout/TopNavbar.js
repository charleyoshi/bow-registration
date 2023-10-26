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
                        return <NavLink to="/">{nav}</NavLink>
                    }
                    else if (nav == 'Login'){
                        return <NavLink to="/student/sign-in">{nav}</NavLink>
                    } else if (nav == 'Admin'){
                        return <NavLink to="/admin/sign-in">{nav}</NavLink>
                    } else if (nav == 'Logout') {
                        // TODO
                    }
                })}
            </nav>
        </div>
    )
}



