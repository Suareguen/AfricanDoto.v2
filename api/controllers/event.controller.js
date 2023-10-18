const Event = require('../models/events.model')



async function getAllEvents(req, res) {
    try {
        const events = await Event.findAll({ paranoid: false })
        if (events) {
            return res.status(200).json(events)
        } else {
            return res.status(404).send('No Events found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneEvent(req, res) {
    try {
        const events = await Event.findByPk(req.params.id)
        if (events) {
            return res.status(200).json(events)
        } else {
            return res.status(404).send('Event not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createEvent(req, res) {
    try {
        const events = await Event.create(req.body)
        return res.status(200).json({ message: 'Event created', events: events })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUsers = () => {

}

async function updateEvent(req, res) {
    try {
        const [eventExist, event] = await Event.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (memberExist !== 0) {
            return res.status(200).json({ message: 'Event updated', event: event })
        } else {
            return res.status(404).send('Event not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteEvent(req, res) {
    try {
        const event = await Event.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (event) {
            return res.status(200).json('Event deleted')
        } else {
            return res.status(404).send('Event not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




module.exports = {
    getAllEvents,
    getOneEvent,
    createEvent,
    updateEvent,
    deleteEvent
}