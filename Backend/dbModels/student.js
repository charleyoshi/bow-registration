import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const studentSchema = new mongoose.Schema(
    {
        studentID: { type: Number, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        dob: { type: Date, required: true },
        department: { type: String, required: true, enum: ["Software Development", "Business", "Emtertainment"], default: "Software Development" },
        program: { type: String, required: true, enum: ["Diploma", "Post-Diploma", "Certificate (3-months)", "Certificate (6-months)"], default: "Diploma" },

    })


studentSchema.statics.signup = async function (inputs) {
    const { username, password, firstName, lastName, email, dob, department, program } = inputs

    // Validation 
    if (!username || !firstName || !lastName || !email || !dob || !department || !program || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }


    const exists = await this.findOne({ username })
    if (exists) {
        throw Error('username already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const student = await this.create({ ...inputs, password: hash })
    return student
}


studentSchema.statics.login = async function (username, password) {

    if (!username || !password) {
        throw Error('All fields must be filled')
    }

    const student = await this.findOne({ username })
    if (!student) {
        throw Error('Incorrect username')
    }

    const match = await bcrypt.compare(password, student.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return student
}

export default mongoose.model('Student', studentSchema)

