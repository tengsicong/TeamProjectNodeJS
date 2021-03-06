const mongo = require('../lib/mongo');
const student = mongo.students;
const team = mongo.teams;

module.exports = {

    /**
     * Author: TENG
     * User:
     * @param {ObjectId} id
     * @return {Object} a student object
     */
    getStudentByStudentID: function getUserByStudentID(id) {
        return student
            .findOne({_id: id})
            .populate('GroupID')
            .exec();
    },
    /**
     * @param {Number} id
     * @return {Object} a student object
     */
    getAllStudent: function getAllStudent() {
        return student
            .find()
            .populate('GroupID')
            .exec();
    },

    getStudentByClientID: function getStudentByClientID(id) {
        return student
            .populate('GroupID')
            .find({GroupID: id})
            .exec();
    },
};

