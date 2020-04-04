const mongo = require('../lib/mongo');
const team = mongo.teams;
const proposal = mongo.proposals;

module.exports = {

    getGroupByProposalID: function getGroupByProposalID(id) {
        return team
            .find({ProposalID: id})
            .exec();
    },
};
