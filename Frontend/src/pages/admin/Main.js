import React, { useState } from "react";
import LeftNavbar from "../../components/layout/LeftNavbar";
import { TopNavbar } from "../../components/layout/TopNavbar";
import { Outlet } from "react-router-dom";
import AdminLoginForm from "../../components/input/form/AdminLoginForm";
import { checkCredentials } from "../../utilities/helper";

export default function Main(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState();
  const [showLogin, setShowLogin] = useState(true);

  const loginAdmin = (username) => {
    setCurrentAdmin(username);
    setIsLoggedIn(true);
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          <TopNavbar
            title="Bow online course registration"
            navs={["Home", "Logout"]}
          />
          <div className="wrapper">
            <div className="col left">
              <LeftNavbar
                className="left"
                isStudent={false}
                user={currentAdmin}
              />
            </div>
            <div className="col right">
              <Outlet
                context={[
                  "admin",
                  props.studentUsers,
                  props.allCourses,
                  props.addCourse,
                  props.deleteCourse,
                  props.enrollments,
                  props.enquiries,
                ]}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <TopNavbar navs={["Home", "Login", "Admin"]} />

          <AdminLoginForm
            onSubmit={checkCredentials}
            credentials={props.admins}
            loginAdmin={loginAdmin}
          />
        </>
      )}
    </>
  );
}
