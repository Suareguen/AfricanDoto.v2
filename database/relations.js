const Member = require('../api/models/member.model.js')
const Donor = require("../api/models/donor.model.js");
const Volunteer = require("../api/models/volunteer.model.js");
const Professional = require('../api/models/professions.model.js')
const Event = require('../api/models/events.model.js')
const EventCategory = require('../api/models/event_category.model.js')
const Project = require('../api/models/projects.model.js')
const ProfessionsNeeded = require('../api/models/professions_needed.model.js')




const addRelationsToModels = () => {
    try {
        // Relations here

        Member.hasOne(Donor, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Donor.belongsTo(Member)

        Member.hasOne(Volunteer, {
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        });
        Volunteer.belongsTo(Member);

        Professional.hasMany(Volunteer)
        Volunteer.belongsTo(Professional)

        Volunteer.belongsToMany(Event, { through: 'volunteer_event', timestamps: false  })
        Event.belongsToMany(Volunteer, { through: 'volunteer_event' })

        EventCategory.hasMany(Event)
        Event.belongsTo(EventCategory)


        Project.belongsToMany(Professional, { through: ProfessionsNeeded })
        Professional.belongsToMany(Project, { through: ProfessionsNeeded })

        Volunteer.hasMany(ProfessionsNeeded)
        ProfessionsNeeded.belongsTo(Volunteer)

        
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels
