import "./RightNavbar.css";
import { NavLink } from "react-router-dom";

export const RightNavbar = () => {
  return (
    <div className="RightNavbar">
      <div className="btnGroup">
        <br />
        <nav>
          <NavLink to="/student">
            <button className="button-1">Login</button>
          </NavLink>
          <br></br>
          <NavLink to="/enquire">
            <button className="button-2">Enquire</button>
          </NavLink>
          <NavLink to="/student">
            <button className="button-2">Apply Now</button>
          </NavLink>
        </nav>
      </div>
      {/* Next item */}
    </div>
  );
};
