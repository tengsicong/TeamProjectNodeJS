const mongo = require('../lib/mongo');
const team = mongo.teams;
const proposal = mongo.proposals;
const client = require('./client');
// team
//     .find()
//     .populate('ProposalID')
//     .populate('Preference')
//     .exec()
//     .then(function (result) {
//         console.log(result[0]);
//     })

module.exports = {

    getGroupByProposalID: function getGroupByProposalID(id) {
        return team
            .find({ProposalID: id})
            .exec();
    },
};


module.exports = {


    /**
     * @param {Number} id
     * @return {team} a team object
     */
    getTeamByTeamID: function getTeamByTeamID(id) {
        return team
            .findOne({_id: id})
            .populate('ProposalID')
            .populate('StudentID')
            .populate('StaffID')
            .exec();
    },

    getGroupByProposalID: function getGroupByProposalID(id) {
        return team
            .find({ProposalID: id})
            .populate('StudentID')
            // .populate('StaffID')
            .exec();
    },
    /**
     * @return {team} a team object
     */
    getAllTeam: function getAllTeam() {
        return team
            .find()
            .exec();
    },
}
