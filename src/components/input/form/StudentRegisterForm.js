import { React, useState } from "react";
import "./Form.css";
import { DEPARTMENTS, PROGRAMS } from "../../../data/course";

var idIncre = 10001;
export default function StudentRegisterForm(props) {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    dob: "",
    department: "",
    program: "",
    studentID: idIncre,
  });
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var check = props.onSubmit(newUser, props.credentials);
    if (check.success) {
      setNewUser({ ...newUser, studentID: (idIncre += 1) });
      props.addStudentUser(newUser);
      props.loginUser(newUser.studentID)
    } else {
      setShowMessageBox(true);
      setMessage(check.message);
    }
  };
  return (
    <div className="StudentRegisterForm">
      <div className="content">
        <h2>Create Account</h2>
        {showMessageBox ? <div className="messageBox failure"> {message} </div> : null}
        <form onSubmit={handleSubmit} className="form">
          <div className="inputBox">
            <input
              type="text"
              value={newUser.firstName}
              name="firstName"
              onChange={handleChange}
              required
            />{" "}
            <i>First Name</i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              value={newUser.lastName}
              name="lastName"
              onChange={handleChange}
              required
            />{" "}
            <i>Last Name</i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              value={newUser.username}
              name="username"
              onChange={handleChange}
              required
            />{" "}
            <i>Username</i>
          </div>

          <div className="inputBox">
            <input
              type="password"
              value={newUser.password}
              name="password"
              onChange={handleChange}
              required
            />{" "}
            <i>Password</i>
            <br />
          </div>

          <div className="inputBox">
            <input
              type="password"
              value={newUser.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              required
            />{" "}
            <i>Confirm Password</i>
            <br />
          </div>

          <div className="inputBox">
            <input
              type="text"
              value={newUser.email}
              name="email"
              onChange={handleChange}
            />{" "}
            <i>Email</i>
          </div>
          <div className="inputBox">
            <input
              type="date"
              value={newUser.dob}
              name="dob"
              onChange={handleChange}
            />{" "}
            <i>Date of Birth</i>
          </div>

          <div className="inputBox">
            <select name="department" onChange={handleChange}>
            <option value="" selected disabled hidden>Please Select</option>
              {DEPARTMENTS.map((D, i) => (
                (i !== 0) ?
                  <option value={D} disabled> {D}</option>
                  : <option value={D} > {D}</option>
              ))}
            </select>
            <i>Department</i>
          </div>

          <div className="inputBox">
            <select name="program" onChange={handleChange}>
              <option value="" selected disabled hidden>Please Select</option>
              {PROGRAMS.map((P) => <option value={P} > {P}</option>)}
            </select>
            <i>Program</i>
          </div>
          <div className="links">
            <a href="#">Forgot Password</a>
          </div>
          <div className="inputBox">
            <button className="submitButton" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
