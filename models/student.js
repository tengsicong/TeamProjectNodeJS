const mongo = require('../lib/mongo');
const student = mongo.students;
const team = mongo.teams;

module.exports = {

    /**
     *
     * @param {Number} id
     * @return {student} a student object
     */
    getStudentByStudentID: function getUserByStudentID(id) {
        return student
            .findOne({StudentID: id})
            .exec();
    },

};
