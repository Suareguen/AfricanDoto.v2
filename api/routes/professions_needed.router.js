const router = require('express').Router()

const {
    getAllProfessionalNeeded,
    getOneProfessionalNeeded,
    createProfessionalNeeded,
    updateProfessionalNeeded,
    deleteProfessionalNeeded
} = require('../controllers/profession_needed.controller.js')






//Admin
router.get('/', getAllProfessionalNeeded)
router.get("/:id", getOneProfessionalNeeded);
router.post("/", createProfessionalNeeded);
router.put("/:id", updateProfessionalNeeded);
router.delete("/:id", deleteProfessionalNeeded);

module.exports = router