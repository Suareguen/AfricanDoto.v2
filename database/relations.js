const Member = require('../api/models/member.model.js')
const Donor = require("../api/models/donor.model.js");
const Volunteer = require("../api/models/volunteer.model.js");
const Professional = require('../api/models/professions.model.js')
const Event = require('../api/models/events.model.js')
const EventCategory = require('../api/models/event_category.model.js')
const Project = require('../api/models/projects.model.js')
const ProfessionsNeeded = require('../api/models/professions_needed.model.js')
const Equipment = require('../api/models/equipment.model.js');
const Donations = require('../api/models/donations.model.js');





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


        Project.belongsToMany(Professional, { through: ProfessionsNeeded, foreignKey: "projectId", otherKey: "professionId" })
        Professional.belongsToMany(Project, { through: ProfessionsNeeded, foreignKey: "professionId", otherKey: "projectId" })

        Volunteer.belongsToMany(ProfessionsNeeded,  { through: 'volunteer_project', timestamps: false })
        ProfessionsNeeded.belongsToMany(Volunteer,  { through: 'volunteer_project', timestamps: false })

        Equipment.belongsToMany(Project, { through: 'project_equipment', timestamps: false})
        Project.belongsToMany(Equipment, { through: 'project_equipment', timestamps: false})

        Donor.hasMany(Donations)
        Donations.belongsTo(Donor)
        
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels
