export const checkCredentials = (username, password, credentials) => {
    console.log('Checking credentials...')
    for (let c of credentials) {
        if (c.username == username && c.password == password) {
            return c
        }
    }
    return false
}

export const checkRegister = (inputs, credentials) => {
    console.log('checking register conditions...')
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