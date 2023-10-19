const Professional = require('../models/professions.model')
const ProfessionsNeeded = require('../models/professions_needed.model')
const Projects = require('../models/projects.model')
const Volunteer = require('../models/volunteer.model')



async function getAllProjectss(req, res) {
    try {
        const projects = await Projects.findAll({ paranoid: false })
        if (projects) {
            return res.status(200).json(projects)
        } else {
            return res.status(404).send('No Projectss found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneProjects(req, res) {
    try {
        const project = await Projects.findByPk(req.params.id)
        if (project) {
            return res.status(200).json(project)
        } else {
            return res.status(404).send('Projects not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createProjects(req, res) {
    try {
        let volunteersArray = []
        const project = await Projects.create(req.body)
        const professionNeeded = await Professional.findByPk(req.body.professoinId)
        const professionalNeeded = await ProfessionsNeeded.create({
            projectId: project.id,
            professionId: professionNeeded.id,
            quantity: req.body.quantity
        })
        if(req.body.volunteersIds.length >= 1) {
            for (let i = 0; i < req.body.volunteersIds.length; i++) {
                let volunteer  = await Volunteer.findByPk(req.body.volunteersIds[i])
                volunteersArray.push(volunteer)
                await professionalNeeded.addVolunteer(volunteer)
            }
            await professionalNeeded.addVolunteers(volunteersArray)
            
        }
        else {
            await project.addProfessional(professionNeeded)
        }
        return res.status(200).json({ message: 'Project created', project: project })
    } catch (error) {
        return res.status(500).send(error)
    }
}


async function updateProjects(req, res) {
    try {
        const [projectExist, project] = await Projects.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (projectExist !== 0) {
            return res.status(200).json({ message: 'Projects updated', project: project })
        } else {
            return res.status(404).send('Projects not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteProjects(req, res) {
    try {
        const project = await Projects.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (project) {
            return res.status(200).json('Projects deleted')
        } else {
            return res.status(404).send('Projects not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}






module.exports = {
    getAllProjectss,
    getOneProjects,
    createProjects,
    updateProjects,
    deleteProjects
}