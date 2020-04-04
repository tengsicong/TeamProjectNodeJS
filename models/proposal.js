const mongo = require('../lib/mongo');
const proposal = mongo.proposals;
const mongoose = require('mongoose');
const marked = require('marked')

// const clientID = mongoose.Types.ObjectId('5e7d2198f8f7d40d64f332d5');
// const clientID = mongoose.Types.ObjectId('5e7d2198f8f7d40d64f332d5');
// proposal
//     .find({ClientID:clientID})
//     .exec()
//     .then(function(result){
//     console.log(result)
// });


// staff
//     .find()
//     .exec()
//     .then(function(result) {
//         console.log(result[0]._id);
//         proposal
//             .find()
//             .populate('GroupID')
//             .find({GroupID: {$elemMatch:{StaffID: id}}})
//             .exec()
//             .then(function(result) {
//                 console.log(result);
//             });
//     });


module.exports = {

    /**
     * @return {[proposal]} All proposals
     */
    getAllProposals: function getAllProposals() {
        return proposal
            .find()
            .exec();
    },


    getProposalByID: function getProposalByID(id) {
        return proposal
            .findOne({_id: id})
            .exec();
    },

    /**
     * @param {ObjectId} id Could be id of student / staff / client.
     * @return {[proposal]} proposals
     */
    getProposalByUserID: function getProposalByUserID(id) {
        return proposal
            .find({ClientID: id})
            .exec();
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
