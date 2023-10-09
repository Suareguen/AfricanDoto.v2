const { checkAuth } = require('../middlewares/auth.js')

const router = require('express').Router()

//Here the routes

router.use('/member',checkAuth, require('./member.router.js'))
router.use('/auth', require('./auth.router.js'))

module.exports = router