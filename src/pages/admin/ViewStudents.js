import React, { useState } from 'react'
import './ViewStudents.css'
import { useOutletContext } from 'react-router-dom'
import StudentProfile from '../../components/admin/StudentProfile'
import { PROGRAMS } from '../../data/data'

export default function ViewStudents() {
    const contexts = useOutletContext()

    const allStudents = contexts[1]
    const allCourses = contexts[2]
    const enrollments = contexts[5]

    const [programType, setProgramType] = useState(PROGRAMS[0])

    return (
        <div className="ViewStudents">
            <br/>
            <div className="btn-group">
                <button className='button-1 active' value={PROGRAMS[0]} onClick={(e) => setProgramType(e.target.value)}>Diploma</button>
                <button className='button-1' value={PROGRAMS[1]} onClick={(e) => setProgramType(e.target.value)}>Post-diploma</button>
                <button className='button-1' value={PROGRAMS[2]} onClick={(e) => setProgramType(e.target.value)}>Certificate (3 months)</button>
                <button className='button-1' value={PROGRAMS[3]} onClick={(e) => setProgramType(e.target.value)}>Certificate (6 months)</button>
            </div>
            <h1 className='program-header'> {programType} </h1>
            {allStudents.filter(s => s.program === programType).map(s => <StudentProfile info={s} enrollments={enrollments} allCourses={allCourses}/>)}

        </div>
    )
}
