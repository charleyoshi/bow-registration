import { React, useState } from 'react'
import './Form.css'
import { Navigate, useNavigate } from 'react-router-dom'
export default function StudentLoginForm(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ username: "", password: "" });
    const [showMessageBox, setShowMessageBox] = useState(false);
    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setInputs({ ...inputs, [key]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let validUser = props.onSubmit(inputs.username, inputs.password, props.credentials);
        // validUser is student object, or false    
        if (validUser) {
            let {username, ...otherFields} = validUser
            console.log("student login success");
            navigate("/student/profile")
        } else {
            setShowMessageBox(true)
        }
        
    }
    return (
        <div className="StudentLoginForm" >
            <div className="content" >

                <h2>Student Login</h2>
                {showMessageBox ? <div className="messageBox" > Invalid username or password. </div> : null}
                
                <form onSubmit={handleSubmit} className="form">
                    <div className="inputBox">
                        <input type="text" value={inputs.username} name='username' onChange={handleChange} required /> <i>Username</i>
                    </div>
                    <div className="inputBox">
                        <input type='password' value={inputs.password} name='password' onChange={handleChange} required /> <i>Password</i><br />
                    </div>

                    <div className="links">
                        <a href="#">Forgot Password</a>
                    </div>
                    <div className="inputBox">
                        <button className="submitButton" type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
