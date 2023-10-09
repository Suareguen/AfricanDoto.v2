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




//Members
router.get('/profile', getMyMember)
router.put('/profile', updateMyMember)
router.delete('/profile', deleteMyMember)

//Admin
router.get('/', getAllMembers)
router.get('/:id', getOneMember)
router.post('/', createMember)
router.put('/:id', updateMember)
router.delete('/:id', deleteMember)

module.exports = router