const bcrypt = require('bcrypt')
const User = require('../models/User')
//const passport = require('../config/passport')
//const { emailRegistro } = require('../config/nodemailer')
const passport = require('passport');

exports.indexView = (req, res) => res.render('index')
exports.signupViewUser = (req, res) => res.render('auth/signupUser')
exports.signupViewJobs = (req, res) => res.render('auth/signupJobs')

exports.signupProcessUser = async(req, res) => {
    const { email, password, name } = req.body
    if (!email || !password) {
        return res.render('auth/signupUser', { errorMessage: 'Por favor llena los campos' })
    }
    const user = await User.findOne({ email })
    if (user) {
        return res.render('auth/signupUser', { errorMessage: 'el usuario ya existe' })
    }
    const salt = bcrypt.genSaltSync(12)
    const hashPass = bcrypt.hashSync(password, salt)
    await User.create({
        email,
        password: hashPass,
        name
    })
    await emailRegistro(email, name)
    res.redirect('/login')
}

exports.signupProcessJob = async(req, res) => {
    const { email, password, name } = req.body
    if (!email || !password) {
        return res.render('auth/signupJobs', { errorMessage: 'Por favor llena los campos' })
    }
    const user = await User.findOne({ email })
    if (user) {
        return res.render('auth/signupJobs', { errorMessage: 'el usuario ya existe' })
    }
    const salt = bcrypt.genSaltSync(12)
    const hashPass = bcrypt.hashSync(password, salt)
    await User.create({
        email,
        password: hashPass,
        name,
        role: 'ADMIN'
    })
    await emailRegistro(email, name)
    res.redirect('/login')

}

exports.loginView = (req, res) => res.render('auth/login')

exports.loginProcess = passport.authenticate('local', {
    successRedirect: 'profile',
    failureRedirect: 'login',
    failureFlash: true
})

exports.logout = (req, res) => {
    req.logout()
    res.redirect('/')
}


exports.profileView = async(req, res) => {
    const id = req.session.passport.user
    const user = await User.findById(id)
    res.render('profile', user)
}
/*
exports.profilePicture = async(req, res) => {
    const id = req.session.passport.user

    const picture = req.file.path
    await User.findByIdAndUpdate(id, { picture }, { new: true })
    res.redirect('profile')
}*/