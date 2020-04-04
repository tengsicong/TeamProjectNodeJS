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
            .populate('ClientID')
            .populate('GroupID')
            .exec();
    },


    getProposalByID: function getProposalByID(id) {
        return proposal
            .findOne({_id: id})
            .exec();
    },

    /**
     * @param {Number} id student id.
     * @return {[proposal]} proposal of student
     */
    getProposalByStudentID: function getProposalByStudentID(id) {
        return proposal
            .populate('ClientID')
            .populate('GroupID')
            .find({GroupID: {StudentID: {$elemMatch: id}}})
            .exec()

    },
};
const mongoose = require('mongoose');
const studentID = mongoose.Types.ObjectId('5e7b6ace4f4ed29e60233999');
// client
//     .find()
//     .exec()
//     .then(function(result) {
//         console.log(result)
//     })


// proposal
//     .find()
//     .populate('ClientID')
//     .populate('GroupID')
//     .exec()
//     .then(function(result) {
//         // let arr = [];
//         for (let i = 0; i < result.length; i++) {
//             for (let j = 0; j < result[i].GroupID.length; j++)
//             if (result[i]['GroupId'][j][_id] == studentID);
//             console.log(result[i]);
//         }
//         // console.log(result)
//         // console.log(result[2])
//     })
//     .catch()
