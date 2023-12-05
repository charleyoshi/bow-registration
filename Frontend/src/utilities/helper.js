export const checkCredentials = (username, password, credentials) => {
    console.log('F1 Checking credentials...')
    console.log(credentials)
    for (let c of credentials) {
        if (c.username == username && c.password == password) {
            return c
        }
    }
    return false
}

export const checkRegister = (inputs, credentials) => {
    console.log('F2 Checking register conditions...')
    console.log(credentials)
    console.log(inputs)
    for (let c of credentials) {
        if (c.username == inputs.username) {
            return { success: false, message: "username already exist. Try using another one." }
        }
        else if (inputs.password != inputs.confirmPassword) {
            return { success: false, message: "Please make sure your passwords match." }
        }
    }
    return { success: true, message: "" }
}


export const checkNewCourse = (newCourse, existingCourses) => {
    for (let e of existingCourses) {
        if (e.courseCode.toLowerCase() === newCourse.courseCode.toLowerCase()) {
            return { success: false, message: "Course code already exist. Try using another one." }
        } else if (e.courseName.toLowerCase() === newCourse.courseName.toLowerCase()) {
            return { success: false, message: "Course name already exist. Try using another one." }
        }
    }
    return { success: true, message: "You have successfully created a new course." }
}
