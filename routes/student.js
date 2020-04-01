const express = require('express');
const router = express.Router();
const studentID = Number(20001);
const UsersModel = require('../models/student');

// UsersModel.getStudentByID(studentID).then(function(students) {
//     console.log(students['Name']);
// });
// const config = require('config-lite')(__dirname)
// const Mongolass = require('mongolass')
// const mongolass = new Mongolass()
// mongolass.connect(config.mongodb, {dbName: 'TeamProject'})
// const students = mongolass.model('students')
// // const students = require('../lib/mongo').students
// students
//     .find()
//     .exec()
//     .then(console.log)
//     .catch(console.error)
//
// const Student = mongolass.model('students', {
//     StudentID: {type: 'Number', required: true},
//     UserName: {type: 'string', required: true},
//     Password: {type: 'string', required: true},
//     Name: {type: 'string', required: true},
//     GroupID: {type: 'Number'},
//     PeoplePreference: [Number],
//     Mark: [Number],
// });

// Student
//     .find()
//     .exec()
//     .then(console.log)
//     .catch(console.error)



// MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
//     if (err) throw err;
//     const dbo = db.db('TeamProject');
//
//     dbo.collection('Student').find({StudentID: studentID}, {Name: 1, _id: 0}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
//
// });



router.get('/student_all_project', function(req, res) {
    UsersModel.getStudentByID(studentID).then(function(students) {
        console.log(students);
        res.render('student/student_all_project', {
            pageTitle: 'All Projects',
            username: students['Name'],
        });
    });
})

// router.get('/', functjion(req,res){
//     res.render( "test.ejs", {pageTitle: "test"})
// })


module.exports = router;
