const router = require('express').Router()

const { getAllMembers,
    deleteMember,
    updateMember,
    createMember,
    getOneMember,
    getMyMember,
    updateMyMember,
    deleteMyMember 
} = require('../controllers/member.controller.js')

const { checkAdmin } = require('../middlewares/auth.js')



//Members
router.get('/profile', getMyMember)
router.put('/profile', updateMyMember)
router.delete('/profile', deleteMyMember)

//Admin
router.get('/', checkAdmin, getAllMembers)
router.get("/:id", checkAdmin, getOneMember);
router.post("/", checkAdmin, createMember);
router.put("/:id", checkAdmin, updateMember);
router.delete("/:id", checkAdmin, deleteMember);

module.exports = router