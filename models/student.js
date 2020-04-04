const mongo = require('../lib/mongo');
const student = mongo.students;
const team = mongo.teams;

// student
//     .find()
//     .populate('GroupID')
//     .exec()
//     .then(function(result) {
//         console.log(result[0].GroupID.ClientMark);
//     })

module.exports = {

    /**
     * @param {Number} id
     * @return {student} a student object
     */
    getStudentByID: function getUserByID(id) {
        return student
            .findOne({StudentID: id})
            .exec();
    },
    /**
     * @param {Number} id
     * @return {student} a student object
     */
    getAllStudent: function getAllStudent() {
        return student
            .find()
            .exec();
    },
    getStudentByClientID: function getStudentByClientID(id) {
        return student
            .populate('GroupID')
            .find({GroupID: id})
            .exec();

    }
};
