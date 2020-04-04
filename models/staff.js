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
     * @param {ObjectId} id
     * @return {[ObjectId]} allocated teams' id
     */
    getAllocatedTeam: function getAllocatedTeam(id) {
        return team
            .find({StaffID: id})
            .exec();
    },

    /**
     * @param {ObjectId} id
     * @return {student} a staff object
     */
    getStaffByID: function getStaffByID(id) {
        return staff
            .findById(id)
            .exec();
    },
};