const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static signup method
userSchema.statics.signup = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled in')
    }
    if(!validator.isEmail(email)) {
        throw Error('Email not valid')
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const existingEmail = await this.findOne({ email })
    if (existingEmail) {
        throw Error('Email is already in use')
    }

    const passwordSalt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, passwordSalt)

    const user = await this.create({ email, password: hash })
    return user
}

// static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled in')
    }

    const existingUser = await this.findOne({ email })
    if (!existingUser) {
        throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(password, existingUser.password)
    if(!match) {
        throw Error('Incorrect password')
    }

    return existingUser
}

module.exports = mongoose.model('User', userSchema, 'users')