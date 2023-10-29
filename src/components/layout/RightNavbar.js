import { NavLink } from 'react-router-dom';
import './RightNavbar.css';

export const RightNavbar = () => {
    return (
        <div className="RightNavbar">
            <div className="btnGroup">
                

                <div className='btnrow'>
                    <NavLink to="student" >
                        <button className="button-1">Login</button>
                    </NavLink>
                </div>
                <div className='btnrow'>
                    <NavLink to="enquire">
                        <button className="button-2">Enquire</button>
                    </NavLink>
                </div>
                <div className='btnrow'>
                    <NavLink to="student">
                        <button className="button-2">Apply Now</button>
                    </NavLink>
                </div>

            </div>

        </div>
    )
}