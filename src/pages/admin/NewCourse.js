import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function NewCourse() {
    const contexts = useOutletContext()
    const allCourses = contexts[2]
    const addCourse = contexts[3]
    const handleClick = () => {
        addCourse("HAHAHA")
    }
    return (
        <div>NewCourse 
            {allCourses.length}
            <button onClick={handleClick}>Add </button>
            <button onClick={() => {console.log(allCourses)}}>SEE </button>
        </div>
    )
}
