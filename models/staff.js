const mongo = require('../lib/mongo');
const staff = mongo.staffs;
const proposal = mongo.proposals;
const team = mongo.teams;

// console.log('start')
// staff
//     .find()
//     .populate('GroupID')
//     .exec()
//     .then(function(result) {
//         console.log(result[0]);
//         console.log('end');
//     });

// module.exports={
//
// }

module.exports = {

    /**
     * @return {[ObjectId]} All allocated teams' ID
     */ 
    getAllTeams: function getAllTeams() {
        return staff
            .find({},'AllocatedTeamID')
            .exec();
    },

    /**
     * @param {ObjectId} id
     * @return {student} a staff object
     */
    getStaffByID: function getUserByID(id) {
        return staff
            .findById(id)
            .exec();
    },
};