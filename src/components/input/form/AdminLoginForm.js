import { React, useState } from 'react'
import './Form.css'
export default function AdminLoginForm({onSubmit, credentials}) {
    const [inputs, setInputs] = useState({ username: "", password: "" })
    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setInputs({ ...inputs, [key]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let result = onSubmit(inputs.username, inputs.password, credentials);
        if (result) {
            console.log("admin login success") 
            // Todo: redirect 
        } else {
            console.log('Wrong username or password')
        }
        
    }
    return (
        <div className="AdminLoginForm" >
            <div className="content" >

                <h2>Admin Login</h2>
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
