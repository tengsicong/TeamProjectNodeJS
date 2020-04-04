const mongo = require('../lib/mongo');
const team = mongo.teams;
const proposal = mongo.proposals;

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
