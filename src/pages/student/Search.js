import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { CoursesDisplay } from '../../components/course/CoursesDisplay';
import SearchBox from '../../components/input/SearchBox';

export default function Search() {

  const contexts = useOutletContext()
  var allCourses;
  if (contexts[0] == 'admin') {
    const allStudents = contexts[1]
    allCourses = contexts[2]
  }
  else { // student's outlet
    allCourses = contexts[2]
  }



  const [displayQueries, setDisplayQueries] = useState(false)
  const [filteredCourses, setFilteredCourses] = useState()
  const [searchKeyword, setSearchKeyword] = useState()

  const getSearchResult = (query) => {
    setFilteredCourses(allCourses.filter(
      (course) =>
        course.courseName.toLowerCase().includes(query.toLowerCase()) ||
        course.courseCode.toLowerCase().includes(query.toLowerCase())
    ))

    setDisplayQueries(true)
    setSearchKeyword(query)
    console.log(filteredCourses)
  }

  return (
    <div>

      <br />
      <SearchBox allCourses={allCourses} getSearchResult={getSearchResult} clear={() => setDisplayQueries(false)} />
      <br />
      {displayQueries ?
        <>
          <CoursesDisplay title="Search Result" subtitle={"Below are the result for: " + searchKeyword} courses={filteredCourses} emptyMsg="No results have been found." />
        </> : <>
          <CoursesDisplay title="Available Courses" subtitle="Below are all the available courses from Software Development Department." courses={allCourses} />
        </>}


      {/* <ul>
          {allCourses.map((course) => (
            <li key={course.courseCode}>
              {course.term}, {course.courseCode} {course.courseName} <br></br>{" "}
              {course.courseDescription} <br></br>
              <button>
                Select
              </button>
            </li>
          ))}
        </ul> */}


    </div>
  )
}
