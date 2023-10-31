import React, { useState } from 'react'
import { checkNewCourse } from '../../../utilities/helper';
import './Form.css'
export default function NewCourseForm(props) {
    const formReset = {
        term: "",
        courseCode: "",
        courseName: "",
        startDate: "",
        endDate: "",
        courseFee: "",
        courseDescription: ""
    }
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [message, setMessage] = useState("");
    const [msgBoxClass, setMsgBoxClass] = useState("success");
    const [newCourse, setNewCourse] = useState(formReset);
    const handleChange = (e) => {
        const key = e.target.name;
        let value = e.target.value;
        if (key === 'term' || key === "courseFee") {
            value = parseInt(value)
        }

        setNewCourse({ ...newCourse, [key]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        var check = checkNewCourse(newCourse, props.existingCourses);
        if (check.success) {
            props.addCourse(newCourse);
            setNewCourse(formReset)
            setMsgBoxClass("success")
        } else {
            setMsgBoxClass("failure")
        }
        setMessage(check.message);
        setShowMessageBox(true);
    };
    return (
        <div className="NewCourseForm">
            <div className="content">
                <br />
                <h2>Add a new course</h2>
                {showMessageBox ? <div className={`content messageBox ${msgBoxClass}`}> {message} </div> : null}
                <form onSubmit={handleSubmit} className="form">
                    <div className="inputBox">
                        <input
                            type="number"
                            value={newCourse.term}
                            name="term"
                            onChange={handleChange}
                            required
                            min="1"
                            max="4"
                        />{" "}
                        <i>Term</i>
                    </div>
                    <div className="inputBox">
                        <input
                            type="text"
                            value={newCourse.courseCode}
                            name="courseCode"
                            onChange={handleChange}
                            required
                        />{" "}
                        <i>Course Code</i>
                    </div>
                    <div className="inputBox">
                        <input
                            type="text"
                            value={newCourse.courseName}
                            name="courseName"
                            onChange={handleChange}
                            required
                        />{" "}
                        <i>Course Name</i>
                    </div>

                    <div className="inputBox">
                        <input
                            type="date"
                            value={newCourse.startDate}
                            name="startDate"
                            onChange={handleChange}
                            required
                        />{" "}
                        <i>Start Date</i>
                        <br />
                    </div>

                    <div className="inputBox">
                        <input
                            type="date"
                            value={newCourse.endDate}
                            name="endDate"
                            onChange={handleChange}
                            required
                        />{" "}
                        <i>End Date</i>
                        <br />
                    </div>

                    <div className="inputBox">
                        <input
                            type="number"
                            step=".01"
                            min="0"
                            value={newCourse.courseFee}
                            name="courseFee"
                            onChange={handleChange}
                        />{" "}
                        <i>Course Fee</i>
                    </div>
                    <div className="inputBox">
                        <input
                            type="text"
                            value={newCourse.courseDescription}
                            name="courseDescription"
                            onChange={handleChange}
                        />{" "}
                        <i>Course Description</i>
                    </div>




                    <div className="inputBox">
                        <button className="submitButton" type="submit">
                            Create New Course
                        </button>
                    </div>
                </form>
                <br />
            </div>
        </div>
    )
}
