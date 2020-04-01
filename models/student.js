const students = require('../lib/mongo').students

module.exports = {
  // 通过用户名获取用户信息
  getStudentByID: function getUserByName(ID) {
    return students
      .findOne({StudentID: ID})
      .exec();
  },
}
