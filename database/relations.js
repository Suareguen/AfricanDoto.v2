const Member = require('../api/models/member.model.js')
const Donor = require("../api/models/donor.model.js");
const Volunteer = require("../api/models/volunteer.model.js");



const addRelationsToModels = () => {
    try {
        // Relations here

        Member.hasOne(Donor)
        Donor.belongsTo(Member)

        Member.hasOne(Volunteer);
        Volunteer.belongsTo(Member);

        
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels
