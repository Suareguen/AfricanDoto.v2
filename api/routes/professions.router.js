const router = require('express').Router()

const {
    getAllProfessions,
    getOneProfession,
    createProfession,
    updateProfession,
    deleteProfession
} = require('../controllers/professional.controller.js')






//Admin
router.get('/', getAllProfessions)
router.get("/:id", getOneProfession);
router.post("/", createProfession);
router.put("/:id", updateProfession);
router.delete("/:id", deleteProfession);

module.exports = router