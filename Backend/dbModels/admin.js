import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const adminSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    })



    adminSchema.statics.signup = async function (username, password) {
        
    
        // Validation 
        if (!username || !password) {
            throw Error('All fields must be filled')
        }
  
      
        const exists = await this.findOne({ username })
        if (exists) {
            throw Error('username already in use')
        }
    
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
    
        const admin = await this.create({ username, password: hash })
        return admin
    }
    


adminSchema.statics.login = async function (username, password) {

    if (!username || !password) {
        throw Error('All fields must be filled')
    }

    const admin = await this.findOne({ username })
    if (!admin) {
        throw Error('Incorrect username')
    }

    const match = await bcrypt.compare(password, admin.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return admin
}
export default mongoose.model('Admin', adminSchema)

