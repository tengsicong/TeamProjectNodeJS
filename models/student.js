const mongo = require('../lib/mongo');
const student = mongo.students;
const team = mongo.teams;

module.exports = {

    /**
     * Author: TENG
     * User:
     * @param {Number} id
     * @return {student} a student object
     */
    getStudentByStudentID: function getUserByStudentID(id) {
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
            .populate('GroupID')
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
