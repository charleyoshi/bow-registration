import './CourseDisplay.css';
import { useState } from 'react';
export const CoursesDisplay = ({ title, subtitle, courses }) => {
    const getCoursesByTerm = (term) => {
        return courses.filter(c => c.term === term)
    }
    return (
        <div className="CourseDisplay">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <Term term={1} courses={getCoursesByTerm(1)}></Term>
            <Term term={2} courses={getCoursesByTerm(2)}></Term>
            <Term term={3} courses={getCoursesByTerm(3)}></Term>
            <Term term={4} courses={getCoursesByTerm(4)}></Term>
        </div>
    )
}


const Term = ({ term, courses }) => {
    return (
        <div className="Term">
            <div className="termNumber">Term {term}</div>
            <CourseList courses={courses} />
        </div>
    )
}


const CourseList = ({ courses }) => {
    return (
        <div className="CourseList">
            {courses.map(c => <CourseListItem course={c} key={c.courseCode} />)}
        </div>
    )
}


const CourseListItem = ({ course }) => {
    const [open, setOpen] = useState(false)
    return (
        <li className="CourseListItem" key={course.courseCode}>
            <div className="courseName" onClick={() => setOpen(!open)}>{course.courseName} </div>
            {
                open ?
                    <div className="collapsible-content">
                        <div className="content-inner">
                            <p><b>Course Code:&nbsp;</b>
                                {course.courseCode}</p>
                            <p><b>Fee:&nbsp;</b>
                                {course.courseFee}</p>
                            <p><b>Description: &nbsp;</b> <br />
                                {course.courseDescription}{course.courseDescription}{course.courseDescription}{course.courseDescription}</p>
                        </div>
                    </div>
                    : null
            }
        </li>


    )
}