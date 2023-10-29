import { React, useState } from "react";
import "./Form.css";
import { Navigate, useNavigate } from "react-router-dom";
var idIncre = 10001;
export default function StudentRegisterForm(props) {
  const depertments = ["Software Development", "Business", "Emtertainment"];
  const programs = ["Diploma", "Post-Diploma", "Certificate"];
  const navigate = useNavigate();
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
    department: depertments[0],
    program: programs[0],
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
      props.loginUser(newUser.studentID);
    } else {
      setShowMessageBox(true);
      setMessage(check.message);
    }
  };

  const handleDepartmentChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [key]: value });
  };

  const handleProgramChange = (e) => {
    setNewUser({ ...newUser, program: e.target.value });
  };

  return (
    <div className="StudentRegisterForm">
      <div className="content">
        <h2>Create Account</h2>
        {showMessageBox ? <div className="messageBox"> {message} </div> : null}
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
              value={newUser.dob.year}
              name="dob"
              onChange={handleChange}
            />{" "}
            <i>Date Of Birth</i>
          </div>
          <p className="dropdown">Department</p>
          <div className="inputBox">
            <select
              className="inputBox"
              type="text"
              value={newUser.dob.department}
              name="department"
              onChange={handleDepartmentChange}
              required
            >
              {depertments.map((department) => (
                <option value={department}> {department}</option>
              ))}
            </select>
          </div>
          <p className="dropdown">Program</p>
          <div className="inputBox">
            <select
              className="inputBox"
              type="text"
              value={newUser.dob.program}
              name="program"
              onChange={handleProgramChange}
              required
            >
              {programs.map((program) => (
                <option value={program}> {program}</option>
              ))}
            </select>
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
