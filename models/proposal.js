const mongo = require('../lib/mongo');
const proposal = mongo.proposals;
const student = mongo.students;
const client = mongo.clients;

module.exports = {

    /**
     * @return {[proposal]} All proposals
     */
    getAllProposals: function getAllProposals() {
        return proposal
            .find()
            .exec();
    },

    /**
     * @param {Number} id Could be id of student / staff / client.
     * @return {[proposal]} proposals
     */
    getProposalByUserID: function getProposalByUserID(id) {
        let result;

        if (id >= Number(40000)) {
            result = proposal
                .find({ClientID: id})
                .exec();
        } else if (id >= Number(30000)) {
            result = proposal
                .find({Team: {$elemMatch: {StaffID: id}}})
                .exec();
        } else if (id >= 20000) {
            result = student
                .findOne({StudentID: id})
                .exec()
                .then(function (s) {
                    return proposal
                        .find({Team: {$elemMatch: {GroupID: s.GroupID}}})
                        .exec();
                });
        } else {
            console.log('getProposalByID method: UserID error');
        }
        return result;
    },
};


// proposal
//     .find()
//     .exec()
//     .then(function(results) {
//         results.forEach(function(result) {
//             result.Team.aggregate([
//                 {
//                     $lookup: {
//                         from: 'staffs',
//                         localField: 'StaffID',
//                         foreignField: 'StaffID',
//                         as: 's',
//                     },
//                 },
//                 ], function (err, docs) {
//                 console.log(result);
//             })
//         })
//     })

// proposal
//     .aggregate([
//         {
//             $lookup: {
//                 from: 'clients',
//                 localField: 'ClientID',
//                 foreignField: 'ClientID',
//                 as: 'c',
//             },
//         },
//         // {
//         //     $match: {
//         //         ProposalID: Number(0),
//         //     }
//         // }
//         // {
//         //     $lookup: {
//         //         from: 'student',
//         //         localField: 'ClientID',
//         //         foreignField: 'ClientID',
//         //         as: 's',
//         //     },
//         // }
//     ])
//     .exec()
//     .then(console.log);
