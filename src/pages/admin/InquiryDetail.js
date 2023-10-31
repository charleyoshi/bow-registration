import React from 'react'
import StudentProfile from '../../components/admin/StudentProfile'
import './InquiryDetail.css'
// studentID, subject, message, phone

export default function InquiryDetail(props) {


    return (
        <div className='InquiryDetail'>
            <div className='section-1'>
                <h1 className='subject' > </h1>
                <br />
                <h1> Subject: {props.inquiry.subject}</h1>
                <h3> message: {props.inquiry.message}</h3>
                <h4>Contact: {props.inquiry.phone}</h4>
            </div>
            <br /><br /><br />
            <div className='section-2'>

                {props.student ?
                    <>
                        <p> Student Information</p>
                        <StudentProfile info={props.student} enrollments={props.enrollments} allCourses={props.allCourses} />
                    </>

                    : 
                    <>
                        <p>Sender is a guest</p>
                    </>
                    
                    
                    }
            </div>
        </div>
    )
}
