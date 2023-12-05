import { React, useState } from 'react'
import StudentLoginForm from '../../components/input/form/StudentLoginForm'
import StudentRegisterForm from '../../components/input/form/StudentRegisterForm'
import { checkCredentials, checkRegister } from '../../utilities/helper'
import { TopNavbar } from '../../components/layout/TopNavbar'

var studentCredentials = [{
    firstName: "Jerry", lastName: "Jam", username: "u", password: "p",
    email: "e", dob: "d", department: "d", program: "p", studentID: 10000, courses: { term1: [], term2: [], term3: [], term4: [] }
}
]

// Not used?

export default function StudentSignIn() {
    const [showLogin, setShowLogin] = useState(true)

    const registerUser = (newUser) => {
        studentCredentials.push(newUser)
        console.log('RegisterUserFn: Array now', studentCredentials)
        return newUser
    }


    return (
        <div>
            <TopNavbar navs={["Home", "Login", "Admin"]} />
            {showLogin ?
                <StudentLoginForm onSubmit={checkCredentials} credentials={studentCredentials} /> :
                <StudentRegisterForm onSubmit={checkRegister} credentials={studentCredentials} successAction={registerUser} />}


            <div>
                {showLogin ?
                    <p>Don’t have an account yet?<br /><br />
                        <strong style={{ color: "#ff895d", cursor: "pointer" }} onClick={() => setShowLogin(false)}>Sign up</strong> first.</p> :
                    <p>Already have an account?<br /><br />
                        <strong style={{ color: "#007cb9", cursor: "pointer" }} onClick={() => setShowLogin(true)}>Login</strong> instead</p>}
                <br /><br /><br /><br />
            </div>
        </div>


    )
}
