import React from "react";
import { useState } from "react";
import { importantDates } from "./course";
import { allCourses0 } from "./course";

function CourseSelection() {
  const [courseData, setCourseData] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filteredCourses = allCourses0.filter(
      (course) =>
        course.courseName.toLowerCase().includes(searchText.toLowerCase()) ||
        course.courseCode.toLowerCase().includes(searchText.toLowerCase())
    );
    setCourseData(filteredCourses);
  };

  const handleCourseSelection = (course) => {
    setSelectedCourses([...selectedCourses, course]);
  };

  return (
    <div>
      <h2>Course Selection</h2>
      <div>
        <input
          type="text"
          placeholder="Search by course name or code"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h3>importantDates</h3>
        <ul>
          {importantDates.map((dates) => (
            <li key={dates.term}>
              Term {dates.term}, {dates.start} {dates.end} <br></br>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Available Courses</h3>
        <ul>
          {allCourses0.map((course) => (
            <li key={course.term}>
              {course.term}, {course.courseCode} {course.courseName} <br></br>{" "}
              {course.courseDescription} <br></br>
              <button onClick={() => handleCourseSelection(course)}>
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Selected Courses</h3>
        <ul>
          {selectedCourses.map((course) => (
            <li key={course.term}>
              ({course.term}, {course.courseCode}) {course.courseName} <br></br>{" "}
              ({course.courseDescription})<br></br>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseSelection;
