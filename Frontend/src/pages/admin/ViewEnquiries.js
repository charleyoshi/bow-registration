import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./ViewEnquiries.css";
import InquiryDetail from "./InquiryDetail";
import axios from "axios";

export default function ViewEnquiries() {
  const contexts = useOutletContext();
  const enquiries = contexts[6];
  const studentUsers = contexts[1];
  const allCourses = contexts[2];
  const enrollments = contexts[5];
  const [enquiry, setEnquiry] = useState([]);

  const getStudentInfo = (SID) => {
    const student = studentUsers.filter(
      (s) => s.studentID.toString() === SID.toString()
    )[0];
    return student;
  };

  useEffect(() => {
    axios
      .get("/api/enquiries/")
      .then((response) => {
        if (response.status === 200) {
          // console.log(response.data);

          setEnquiry(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching course data :(", error);
      });
  }, []);
  return (
    <div>
      <div className="ViewEnquiries">
        <br />
        <h1 className="program-header"> Students' Enquiries </h1>
      </div>
      {enquiry.map((e) => {
        return (
          <InquiryDetail
            inquiry={e}
            //student={getStudentInfo(e.studentID)}
            //enrollments={enrollments}
            //allCourses={allCourses}
          />
        );
      })}
    </div>
  );
}
