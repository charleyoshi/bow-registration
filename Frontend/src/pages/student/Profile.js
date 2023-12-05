import React, { useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";

export default function Profile() {
  const [
    isStudent,
    studentUsers,
    currentUser,
    allCourses,
    enroll,
    enrollments,
    hasEnrolled,
    drop,
  ] = useOutletContext();
  // const [user] = studentUsers.filter((u) => u.studentID === currentUserSID);
  // console.log("current", currentUserSID);

  const user = currentUser;
  return (
    <div>
      <h1>Student Profile </h1>
      <br />
      <br />
      <br />
      <p>First Name: {user.firstName}</p>
      <br />
      <p>Last Name: {user.lastName}</p>
      <br />
      <p>Student ID: {user.studentID}</p>
      <br />
      <p>Username: {user.username}</p>
      <br />

      <p>Email: {user.email}</p>
      <br />
      <p>Date-of-birth: {user.dob}</p>
      <br />
      <p>Department: {user.department}</p>
      <br />
      <p>Program: {user.program}</p>
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <p>
        If you wish to update your personal information, please{" "}
        <NavLink to="../enquire">contact</NavLink> the admin.
      </p>
    </div>
  );
}
