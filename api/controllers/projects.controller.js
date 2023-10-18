const Projects = require('../models/projects.model')



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
        const project = await Projects.create(req.body)
        return res.status(200).json({ message: 'Projects created', project: project })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUsers = () => {

}

async function updateProjects(req, res) {
    try {
        const [ProjectsExist, project] = await Projects.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (memberExist !== 0) {
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