const jwt = require('jsonwebtoken')
const Member = require('../models/member.model')

const checkAuth = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(404).json({ message: 'Token not found'})
    }
    jwt.verify(req.headers.authorization, 'secret', async (err, payload) => {
        if (err) {
            return res.status(401).send('Invalid token')
        }
        const member = await Member.findOne({
            where:
            {
                email: payload.email
            }
        })
        res.locals.member = member
        if (!member) {
            return res.status(401).send('Invalid token')
        }
        next()
    })

}


const checkAdmin = (req, res, next) => {
    if (res.locals.member.role === 'admin') {
        next()
    } else {
        res.json('This is just for admins!')
    }
}

const checkDonor = (req, res, next) => {
    if (res.locals.member.role === 'donor' || res.locals.member.role === 'admin' || res.locals.member.role === 'volunteer_donor') {
        next()
    } else {
        res.status(401).send('This is just for Donors or Volunteer_donors!')
    }
}


const checkVolunteer = (req, res, next) => {
    if (res.locals.member.role === 'volunteer' || res.locals.member.role === 'admin' || res.locals.member.role === 'volunteer_donor') {
        next()
    }
    else {
        return res.status(401).send('This is just for Volunteers!')
    }
}


module.exports = {
    checkAuth,
    checkAdmin,
    checkVolunteer,
    checkDonor
}