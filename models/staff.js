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
     * @return {[teams]} allocated team
     */
    getAllocatedTeamByStaffID: function getAllocatedTeamByStaffID(id) {
        return team
            .find({StaffID: id})
            .exec();
    },


    /**
     * @param {ObjectId} id
     * @return {staffs} a staff object
     */
    getStaffByStaffID: function getStaffByStaffID(id) {
        return staff
            .findById(id)
            .exec();
    },

    /**
     * @param {String} name, staff's user name which is usually an email address
     * @return {staffs} a staff object
     */
    getStaffByUserName: function getStaffByUserName(name) {
        return staff
            .find({UserName: name})
            .exec();
    },

    /**
     * @param {ObjectId} id
     * @return {[staffs]} staff object
     */
    getAllStaff: function getAllStaff() {
        return staff
            .find()
            .exec();
    },
};
