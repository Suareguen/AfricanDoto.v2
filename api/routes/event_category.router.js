const router = require('express').Router()

const {
    getAllEvents,
    getOneEvent,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/event_category.controller.js')

const { checkAdmin } = require('../middlewares/auth.js')





//Admin
router.get('/', getAllEvents)
router.get("/:id", getOneEvent);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router