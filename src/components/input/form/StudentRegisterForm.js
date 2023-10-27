import { React, useState } from 'react'
import './Form.css'
import { Navigate, useNavigate } from 'react-router-dom'
var idIncre = 10001;
export default function StudentRegisterForm(props) {
    const navigate = useNavigate();
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [message, setMessage] = useState();
    const [newUser, setNewUser] = useState({ firstName: "",lastName:"", username:"", password: "", confirmPassword: "", email: "", dob: "", department: "", program: "", studentID:idIncre })
    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setNewUser({ ...newUser, [key]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        var check = props.onSubmit(newUser, props.credentials)
        if (check.success) {
            setNewUser({ ...newUser, studentID: idIncre += 1})
            console.log('WATCH this: ', newUser)
            props.successAction(newUser);
            navigate("/student/profile")

        } else {
            setShowMessageBox(true)
            setMessage(check.message)
        }

    }
    return (
        <div className="StudentRegisterForm" >
            <div className="content" >

                <h2>Create Account</h2>
                {showMessageBox ? <div className="messageBox" > {message} </div> : null}
                <form onSubmit={handleSubmit} className="form">
                    <div className="inputBox">
                        <input type="text" value={newUser.firstName} name='firstName' onChange={handleChange} required /> <i>First Name</i>
                    </div>
                    <div className="inputBox">
                        <input type="text" value={newUser.lastName} name='lastName' onChange={handleChange} required /> <i>Last Name</i>
                    </div>
                    <div className="inputBox">
                        <input type="text" value={newUser.username} name='username' onChange={handleChange} required /> <i>Username</i>
                    </div>
                    
                    <div className="inputBox">
                        <input type='password' value={newUser.password} name='password' onChange={handleChange} required /> <i>Password</i><br />
                    </div>

                    <div className="inputBox">
                        <input type='password' value={newUser.confirmPassword} name='confirmPassword' onChange={handleChange} required /> <i>Confirm Password</i><br />
                    </div>

                    <div className="inputBox">
                        <input type="text" value={newUser.email} name='email' onChange={handleChange} /> <i>Email</i>
                    </div>
                    <div className="inputBox">
                        <input type="text" value={newUser.dob.year} name='dob' onChange={handleChange} /> <i>YYYY-MM-DD</i>
                    </div>
                    <div className="inputBox">
                        <input type="text" value={newUser.dob.department} name='department' onChange={handleChange} /> <i>Department</i>
                    </div>

                    <div className="inputBox">
                        <input type="text" value={newUser.dob.program} name='program' onChange={handleChange} /> <i>Program</i>
                    </div>
                    <div className="links">
                        <a href="#">Forgot Password</a>
                    </div>
                    <div className="inputBox">
                        <button className="submitButton" type='submit'>Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
