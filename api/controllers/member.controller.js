const Member = require('../models/member.model')


async function getAllMembers(req, res) {
    try {
        const member = await Member.findAll({ paranoid: false })
        if (member) {
            return res.status(200).json(member)
        } else {
            return res.status(404).send('No Members found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneMember(req, res) {
    try {
        const member = await Member.findByPk(req.params.id)
        if (member) {
            return res.status(200).json(member)
        } else {
            return res.status(404).send('Member not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createMember(req, res) {
    try {
        const member = await Member.create(req.body)
        return res.status(200).json({ message: 'Member created', member: member })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateMember(req, res) {
    try {
        const [memberExist, member] = await Member.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (memberExist !== 0) {
            return res.status(200).json({ message: 'Member updated', member: member })
        } else {
            return res.status(404).send('Member not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteMember(req, res) {
    try {
        const member = await Member.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (member) {
            return res.status(200).json('Member deleted')
        } else {
            return res.status(404).send('Member not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getMyMember(req, res) {
    try {
        const member = await Member.findByPk(res.locals.member.id)
        if (member) {
            return res.status(200).json(member)
        } else {
            return res.status(404).send('Member not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateMyMember(req, res) {
    try {
        const [memberExist, member] = await Member.update(req.body, {
            returning: true,
            where: {
                id: res.locals.member.id,
            },
        })
        if (memberExist !== 0) {
            return res.status(200).json({ message: 'Member updated', member: member })
        } else {
            return res.status(404).send('Member not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteMyMember(req, res) {
    try {
        const member = await Member.destroy({
            where: {
                id: res.locals.member.id,
            },
        })
        if (member) {
            return res.status(200).json('Member deleted')
        } else {
            return res.status(404).send('Member not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllMembers,
    deleteMember,
    updateMember,
    createMember,
    getOneMember,
    getMyMember,
    updateMyMember,
    deleteMyMember
}