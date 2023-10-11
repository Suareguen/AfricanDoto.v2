const Member = require('../api/models/member.model.js')
const Donor = require("../api/models/donor.model.js");
const Volunteer = require("../api/models/volunteer.model.js");



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

        
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels
