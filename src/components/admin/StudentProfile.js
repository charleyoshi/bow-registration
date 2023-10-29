import React, { useState } from 'react'
import './StudentProfile.css'
import { CoursesDisplay } from '../course/CoursesDisplay'

export default function StudentProfile(props) {
    const enrollments = props.enrollments
    const student = props.info
    const [showDetail, setShowDetail] = useState(false)

    const enrollmentsByUser = enrollments.filter(e => e.studentID == student.studentID) // {studentID: 10000, term: 1, courseCode: 'C++'}
    const coursesByUser = props.allCourses.filter(o => enrollmentsByUser.some(({ courseCode }) => o.courseCode === courseCode));
    const handleExpand = () => {
        setShowDetail(!showDetail)
    }

    return (
        <div className="StudentProfile">
            <div className='personal'>

                <h1 className='header' onClick={handleExpand}> {student.lastName} {student.firstName} , {student.studentID}</h1>
                <br />
                <h3 > Department: {student.department}</h3>
                <h4> Email: {student.email}</h4>
            </div>
            <div className='courses'>
                {showDetail ?
                    <>
                        <h2>Enrolled Courses
                        </h2>
                        <br />
                        <CoursesDisplay forAdmin={false} courses={coursesByUser} emptyMsg="No matched results." />
                    </> : null}


            </div>

        </div>
    )
}
