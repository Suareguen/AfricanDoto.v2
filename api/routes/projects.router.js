const router = require('express').Router()

const {
    getAllProjectss,
    getOneProjects,
    createProjects,
    updateProjects,
    deleteProjects,
    volunteerProjectProposal
} = require('../controllers/projects.controller.js')






//Admin
router.get('/', getAllProjectss)
router.get("/:id", getOneProjects)
router.post("/", createProjects)
router.post("/projectProposal", volunteerProjectProposal)
router.put("/:id", updateProjects)
router.delete("/:id", deleteProjects)

module.exports = router