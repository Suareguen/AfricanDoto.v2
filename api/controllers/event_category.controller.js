const EventCategory = require('../models/event_category.model')



async function getAllEvents(req, res) {
    try {
        const categories = await EventCategory.findAll({ paranoid: false })
        if (events) {
            return res.status(200).json(categories)
        } else {
            return res.status(404).send('No Categories found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneEvent(req, res) {
    try {
        const category = await EventCategory.findByPk(req.params.id)
        if (events) {
            return res.status(200).json(category)
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createEvent(req, res) {
    try {
        const categoriy = await EventCategory.create(req.body)
        return res.status(200).json({ message: 'Category created', category: category })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


async function updateEvent(req, res) {
    try {
        const [categoryExist, category] = await EventCategory.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (categoryExist !== 0) {
            return res.status(200).json({ message: 'Category updated', category: category })
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteEvent(req, res) {
    try {
        const category = await EventCategory.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (category) {
            return res.status(200).json('Category deleted')
        } else {
            return res.status(404).send('Category not found')
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