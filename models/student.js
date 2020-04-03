const mongo = require('../lib/mongo');
const student = mongo.students;


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

};
