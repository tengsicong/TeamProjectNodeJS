const mongo = require('../lib/mongo');
const proposal = mongo.proposals;
const student = mongo.students;
const client = mongo.clients;
const mongoose = require('mongoose')

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


    getProposalByProposalID: function getProposalByProposalID(id) {
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


    getProposalByClientID: function getProposalByClientID(id) {
        return proposal
            .find({ClientID:id})
            .exec()

    },
};

const studentID = mongoose.Types.ObjectId('5e7b6ace4f4ed29e60233999');
return proposal
    .find()
    .populate('ClientID')
    .populate('GroupID')
    .find({GroupId: {$elemMatch: {TeamName: 1}}})
    .exec()
    .then(function(result) {
        // console.log(result)
        console.log(result)
    })
    .catch()
