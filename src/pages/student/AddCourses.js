import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import EnrollTerm from '../../components/course/Enrollment';

export default function AddCourses() {

  const [isStudent, studentUsers, currentUserSID, allCourses, enroll, enrollments, hasEnrolled, drop] = useOutletContext();
  const [term, setTerm] = useState(1)

  


  return (
    <>
      <br />
      <div className="btn-group">
        <button className='button-1' value={1} onClick={(e) => setTerm(e.target.value)}>Term 1 </button>
        <button className='button-1' value={2} onClick={(e) => setTerm(e.target.value)}>Term 2</button>
        <button className='button-1' value={3} onClick={(e) => setTerm(e.target.value)}>Term 3</button>
        <button className='button-1' value={4} onClick={(e) => setTerm(e.target.value)}>Term 4</button>
      </div>
      <EnrollTerm term={term} courses={allCourses} emptyMsg="" enroll={enroll} enrollments={enrollments} SID={currentUserSID} hasEnrolled={hasEnrolled} drop={drop} />
    </>
  )
}

