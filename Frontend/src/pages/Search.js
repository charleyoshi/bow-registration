import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CoursesDisplay } from "../components/course/CoursesDisplay";
import SearchBox from "../components/input/SearchBox";
import axios from "axios";

export default function Search() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("/api/courses/")
      .then((response) => {
        if (response.status === 200) {
          //console.log(response.data);

          setCourses(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching course data :(", error);
      });
  }, []);

  const contexts = useOutletContext();
  var allCourses;
  var deleteCourse;
  if (contexts[0] == "admin") {
    const allStudents = contexts[1];
    allCourses = contexts[2];
    deleteCourse = contexts[4];
  } else {
    // student's outlet
    allCourses = contexts[3];
  }

  const [displayQueries, setDisplayQueries] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState();
  const [searchKeyword, setSearchKeyword] = useState();

  const getSearchResult = (query) => {
    setFilteredCourses(
      courses.filter(
        (course) =>
          course.courseName.toLowerCase().includes(query.toLowerCase()) ||
          course.courseCode.toLowerCase().includes(query.toLowerCase())
      )
    );

    setDisplayQueries(true);
    setSearchKeyword(query);
    // console.log(filteredCourses);
  };

  return (
    <div>
      <br />
      <SearchBox
        allCourses={courses}
        getSearchResult={getSearchResult}
        clear={() => setDisplayQueries(false)}
      />
      <br />
      {contexts[0] === "admin" && displayQueries ? (
        <CoursesDisplay
          title="Search Result"
          subtitle={"Below are the result for: " + searchKeyword}
          courses={filteredCourses}
          emptyMsg="No results have been found."
          forAdmin={true}
          deleteCourse={deleteCourse}
        />
      ) : contexts[0] === "admin" && !displayQueries ? (
        <CoursesDisplay
          title="Available Courses"
          subtitle="Below are all the available courses from Software Development Department."
          courses={courses}
          emptyMsg="No results have been found."
          forAdmin={true}
          deleteCourse={deleteCourse}
        />
      ) : contexts[0] !== "admin" && displayQueries ? (
        <CoursesDisplay
          title="Search Result"
          subtitle={"Below are the result for: " + searchKeyword}
          courses={filteredCourses}
          emptyMsg="No results have been found."
        />
      ) : (
        <CoursesDisplay
          title="Available Courses"
          subtitle="Below are all the available courses from Software Development Department."
          courses={courses}
        />
      )}
    </div>
  );
}
