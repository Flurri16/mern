import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
export const register = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        if(user) return res.json({message: 'User already exist.'})
        
        const salt = bcrypt.genSaltSync(8)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await new User({username, password: hash})

        const token = jwt.sign({id: newUser.id}, process.env.JWT_SECRET, {expiresIn: "30d"})

        await newUser.save()

        return res.json({newUser, message: "User is created.", token})
    } catch(err) {
        console.log(err)
        res.json({message: 'Registration error.'})
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        if(!user) return res.json({message: 'User is not exist.'})
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) return res.json({message: 'Password is not correct.'})
        
        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn: '30d'})

        res.json({user, token, message: 'Well come!'})
    } catch(err) {
        console.log(err)
        res.json({message: "Login error."})
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.idOfUser)
        if(!user) return res.json({message: "User is not exist."})
        
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "30d"})
    
        res.json({user, message: 'You was logined!', token})
    } catch(err) {
        console.log(err)
        return res.json({message: 'Eror of me.'})
    }
}