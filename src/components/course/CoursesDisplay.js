import { Outlet } from 'react-router-dom';
import './CourseDisplay.css';
import { useState } from 'react';

export const CoursesDisplay = (props) => {
    const getCoursesByTerm = (term) => {
        return props.courses.filter(c => c.term === term)
    }
    return (
        <div className="CourseDisplay">
            <div className="title">{props.title}</div>
            <div className="subtitle">{props.subtitle}</div>
           
            <Term term={1} courses={getCoursesByTerm(1)} emptyMsg={props.emptyMsg} isEnrollment={props.isEnrollment}
                enroll={props.enroll} drop={props.drop} enrollments={props.enrollments} student={props.currentUserSID} showDropResult={props.showDropResult} />
            <Term term={2} courses={getCoursesByTerm(2)} emptyMsg={props.emptyMsg} isEnrollment={props.isEnrollment}
                enroll={props.enroll} drop={props.drop} enrollments={props.enrollments} student={props.currentUserSID} showDropResult={props.showDropResult}/>
            <Term term={3} courses={getCoursesByTerm(3)} emptyMsg={props.emptyMsg} isEnrollment={props.isEnrollment}
                enroll={props.enroll} drop={props.drop} enrollments={props.enrollments} student={props.currentUserSID} showDropResult={props.showDropResult}/>
            <Term term={4} courses={getCoursesByTerm(4)} emptyMsg={props.emptyMsg} isEnrollment={props.isEnrollment}
                enroll={props.enroll} drop={props.drop} enrollments={props.enrollments} student={props.currentUserSID} showDropResult={props.showDropResult}/>
        </div>
    )
}

// todo: delete all enrolls here

export const Term = ({ term, courses, emptyMsg, isEnrollment, enroll, drop, enrollments, student, showDropResult }) => {
    return (
        <div className="Term">
            <div className="termNumber">Term {term}</div>
            <CourseList student={student} courses={courses} emptyMsg={emptyMsg} isEnrollment={isEnrollment} 
            enroll={enroll} drop={drop} enrollments={enrollments} showDropResult={showDropResult}/>
        </div>
    )
}


const CourseList = ({ courses, emptyMsg, isEnrollment, enroll, drop, enrollments, student, showDropResult }) => {
    return (
        <div className="CourseList">
            {courses.length === 0 ? <span style={{ fontSize: "smaller", color: "dimgrey" }}> {emptyMsg} </span> :

                courses.map(c => <CourseListItem SID={student} isEnrollment={isEnrollment} enroll={enroll} drop={drop} 
                enrollments={enrollments} course={c} key={c.courseCode} showDropResult={showDropResult}/>)}
        </div>
    )
}


export const CourseListItem = ({ SID, course, isEnrollment, drop, showDropResult }) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        var result = drop(SID, course)
        // console.log(result)
        showDropResult(result)
    }
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
                        {isEnrollment ?
                            <div className="buttonRow">
                                <button className="button-2" onClick={handleClick} > Drop </button>
                            </div> : null}

                    </div>
                    : null
            }

        </li>


    )
}