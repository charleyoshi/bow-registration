import { React, useState } from "react";
import "./Form.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function StudentLoginForm(props) {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [showMessageBox, setShowMessageBox] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/student/login", {
        ...inputs,
      })
      .then(function (student) {
        //console.log(student);
        if (student.status === 200) {
          props.loginUser(student.data.student);
          // Navigate(`/student`, { state: { user: student.data.student } });
        } else {
          setShowMessageBox(true);
        }
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });

    // let validUser = props.onSubmit(
    //   inputs.username,
    //   inputs.password,
    //   props.credentials
    // );
    // // validUser is student object, or false
    // if (validUser) {
    //   let { username, ...otherFields } = validUser;
    //   console.log("student login inputs are valid: ", validUser.studentID);

    //   props.loginUser(validUser.studentID)
    // navigate to student profile page
    // navigate(`/student`, { state: { user: validUser } });
    // } else {
    //   setShowMessageBox(true);
    // }
  };
  return (
    <div className="StudentLoginForm">
      <div className="content">
        <h2>Student Login</h2>
        {showMessageBox ? (
          <div className="messageBox failure">
            {" "}
            Invalid username or password.{" "}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="form">
          <div className="inputBox">
            <input
              type="text"
              value={inputs.username}
              name="username"
              onChange={handleChange}
              required
            />{" "}
            <i>Username</i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              value={inputs.password}
              name="password"
              onChange={handleChange}
              required
            />{" "}
            <i>Password</i>
            <br />
          </div>

          <div className="links">
            <NavLink to="../enquire">
              <a href="#">Forgot Password</a>
            </NavLink>
          </div>
          <div className="inputBox">
            <button className="submitButton" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
