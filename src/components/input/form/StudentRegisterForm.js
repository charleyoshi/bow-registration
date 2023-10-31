import { React, useState } from "react";
import "./Form.css";
import { DEPARTMENTS, PROGRAMS } from "../../../data/data";

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
            <select name="department" onChange={handleChange} value={newUser.department}>
              <option value="" disabled hidden>Please Select</option>
              {DEPARTMENTS.map((D, i) => (
                (i !== 0) ?
                  <option key={D} value={D} disabled> {D}</option>
                  : <option key={D} value={D} > {D}</option>
              ))}
            </select>
            <i>Department</i>
>>>>>>> 58838e1aa86b4b0a9d872499a0b437fa797e5319
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
