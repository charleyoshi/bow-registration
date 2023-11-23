import express from 'express'
import Admin from '../dbModels/admin.js'

const router = express.Router()

//login route
router.post('/login', async (req, res) => {
    const {username, password} = req.body

    try {
        const admin = await Admin.login(username, password)
        
        res.status(200).json({ admin: admin })
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
})

//signup route
router.post('/signup', async (req, res) => {
    
    const {username, password} = req.body


    try {
        const admin = await Admin.signup(username, password)
        
        res.status(201).json({ admin: admin })
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
})




export default router
