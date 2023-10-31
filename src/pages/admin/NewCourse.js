import React from 'react'
import { useOutletContext } from 'react-router-dom'
import NewCourseForm from '../../components/input/form/NewCourseForm'

export default function NewCourse() {
    const contexts = useOutletContext()

    const allCourses = contexts[2]
    const addCourse = contexts[3]


    return (
        <div>
            <NewCourseForm existingCourses={allCourses} addCourse={addCourse} />
        </div>
    )
}
