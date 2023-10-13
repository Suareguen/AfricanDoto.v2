const Profession = require('../models/professions.model')



async function getAllProfessions(req, res) {
    try {
        const professions = await Profession.findAll({ paranoid: false })
        if (professions) {
            return res.status(200).json(professions)
        } else {
            return res.status(404).send('No Professions found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneProfession(req, res) {
    try {
        const profession = await Profession.findByPk(req.params.id)
        if (profession) {
            return res.status(200).json(profession)
        } else {
            return res.status(404).send('Profession not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createProfession(req, res) {
    try {
        const profession = await Profession.create(req.body)
        return res.status(200).json({ message: 'Profession created', profession: profession })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUsers = () => {

}

async function updateProfession(req, res) {
    try {
        const [memberExist, profession] = await Profession.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (memberExist !== 0) {
            return res.status(200).json({ message: 'Profession updated', profession: profession })
        } else {
            return res.status(404).send('Profession not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteProfession(req, res) {
    try {
        const profession = await Profession.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (profession) {
            return res.status(200).json('Profession deleted')
        } else {
            return res.status(404).send('Profession not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




module.exports = {
    getAllProfessions,
    getOneProfession,
    createProfession,
    updateProfession,
    deleteProfession
}