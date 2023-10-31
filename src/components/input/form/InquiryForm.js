import React, { useState } from 'react'
import './Form.css'

const resetForm = {
    studentID: "",
    subject: "",
    message: "",
    phone: "",
}
export default function InquiryForm(props) {
    const [showMessageBox, setShowMessageBox] = useState(false)
    const [message, setMessage] = useState("")
    const [msgBoxClass, setMsgBoxClass] = useState("success")
    const sendEnquiry = props.sendEnquiry
    const [formData, setFormData] = useState(resetForm);
    const [isCurrentStudent, setIsCurrentStudent] = useState(false)

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [key]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var result = sendEnquiry(formData)
        console.log('your form: ', formData)

        if (result.success) {
            setFormData(resetForm)
            setMsgBoxClass("success")
        } else {
            setMsgBoxClass("failure")
        }
        setMessage(result.message);
        setShowMessageBox(true);

    };
    return (
        <>
            <div className="inquiry-form-container">
                <h2>Student Inquiry Form</h2>

                <form onSubmit={handleSubmit} className="inquiry-form">

                    <div className="form-group checkboxRow">
                        <input onClick={() => setIsCurrentStudent(!isCurrentStudent)} className='checkbox' type="checkbox" name="isCurrentStudent" value={isCurrentStudent} />
                        <span> &nbsp; &nbsp; I am a current student </span>

                    </div>

                    {isCurrentStudent ?
                        <div className="form-group">
                            <label>Student ID:</label>
                            <input
                                name="studentID"
                                type="text"
                                value={formData.studentID}
                                onChange={handleChange}
                                required
                            />
                        </div> : null}

                    <div className="form-group">
                        <label>Subject:</label>
                        <input
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
            {showMessageBox ? <div className={`messageBox ${msgBoxClass}`}> {message} </div> : null}
        </>
    )
}
