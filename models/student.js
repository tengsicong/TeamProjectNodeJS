const students = require('../lib/mongo').students

module.exports = {
  // 通过用户名获取用户信息
  getStudentByID: function getUserByName(ID) {
    return students
      .findOne({StudentID: ID})
      .exec();
  },
}

students
    .create({StudentID: Number(0.01), UserName: 'test', Password:'p', Name: 'testname'})
    // .exec()
    .then(console.log)
    .catch(console.error);

// students
//     .findOne({StudentID: Number(0)}).exec().then(function(result) {
//       // if (result.PeoplePreference.type())
//       console.log(result.PeoplePreference);
// });
// students
//     .find({StudentID: Number(0)},{$set: {s: Number(0)}}).exec();


