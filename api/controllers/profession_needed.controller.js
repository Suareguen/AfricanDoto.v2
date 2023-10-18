const ProfessionsNeeded = require('../models/professions_needed.model')



async function getAllProfessionalNeeded(req, res) {
    try {
        const professionalNeeded = await ProfessionsNeeded.findAll({ paranoid: false })
        if (professionalNeeded) {
            return res.status(200).json(professionalNeeded)
        } else {
            return res.status(404).send('No Categories found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneProfessionalNeeded(req, res) {
    try {
        const professionalNeeded = await ProfessionsNeeded.findByPk(req.params.id)
        if (professionalNeeded) {
            return res.status(200).json(professionalNeeded)
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createProfessionalNeeded(req, res) {
    try {
        const professionalNeeded = await ProfessionsNeeded.create(req.body)
        return res.status(200).json({ message: 'Category created', professionalNeeded: professionalNeeded })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


async function updateProfessionalNeeded(req, res) {
    try {
        const [professionalNeededExist, professionalNeeded] = await ProfessionsNeeded.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (professionalNeededExist !== 0) {
            return res.status(200).json({ message: 'Category updated', professionalNeeded: professionalNeeded })
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteProfessionalNeeded(req, res) {
    try {
        const professionalNeeded = await ProfessionsNeeded.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (professionalNeeded) {
            return res.status(200).json('Category deleted')
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




module.exports = {
    getAllProfessionalNeeded,
    getOneProfessionalNeeded,
    createProfessionalNeeded,
    updateProfessionalNeeded,
    deleteProfessionalNeeded
}