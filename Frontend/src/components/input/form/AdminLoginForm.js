import { React, useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function AdminLoginForm({ onSubmit, credentials, loginAdmin }) {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [showMessageBox, setShowMessageBox] = useState(false);
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let validAdmin = onSubmit(inputs.username, inputs.password, credentials);
    // console.log(inputs);
    axios
      .post("/api/admin/login", {
        ...inputs,
      })
      .then(function (admin) {
        if (admin.status === 200) {
          // console.log(admin);
          console.log(
            "admin login success. Your username: ",
            admin.data.admin.username
          );
          loginAdmin(admin.data.admin.username);
        } else {
          setShowMessageBox(true);
        }
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  };
  return (
    <div className="AdminLoginForm">
      <div className="content">
        <h2>Admin Login</h2>
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
