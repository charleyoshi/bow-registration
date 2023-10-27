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