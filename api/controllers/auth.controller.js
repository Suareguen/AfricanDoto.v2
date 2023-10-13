const Member = require('../models/member.model.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Professional = require('../models/professions.model.js')
// const Proffesional = require('../models/professional.model')

const signUp = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        if (req.body.role === 'admin') {
            return res.status(500).json('You can\'t declare yourself as an admin')
        }
        const member = await Member.create(req.body)
        if (req.body.role === 'donor') {
            await member.createDonor()
        }
        if (req.body.role === 'volunteer') {
            const profession = req.body.profession
            const professional = await Professional.findAll({
                where: {
                    name: profession
                }
            })
        await member.createVolunteer()
        }

        if(req.body.role === "volunteer_donor") {
            await member.createDonor()
            await member.createVolunteer()
        }
        const token = jwt.sign({ email: member.email }, 'secret', { expiresIn: '7h' })
        return res.status(200).json({member, token})
    } catch (error) {
        console.error(error)
        return res.status(500).send('Error: Cannot create member')
    }
}

const login = async (req, res) => {
    try {
        const member = await Member.findOne({
            where:
            {
                email: req.body.email
            }
        })
        if (!member) {
            return res.status(500).send('Error: Wrong Email or Password')
        }
        const compare = bcrypt.compareSync(req.body.password, member.password)
        if(compare) {
            const token = jwt.sign({ email: member.email }, 'secret', { expiresIn: '7h' })
            return res.status(200).json({message: 'Member logged.', token})
        }
        return res.status(400).json({message: 'Error: Wrong Email or Password'})
    }
    catch (err) {
        return res.status(500).json(err.message)
    }
}


module.exports = {
    signUp,
    login
}