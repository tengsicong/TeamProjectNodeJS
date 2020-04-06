const express = require('express');
const router = express.Router();
const studentModel = require('../models/student');
const proposalModel = require('../models/proposal');
const staffModel = require('../models/staff');
const teamModel = require('../models/team');
const mongoose = require('mongoose');
const studentID = mongoose.Types.ObjectId('5e7b6ace4f4ed29e60233999');

// proposalModel.getProposalByStudentID(studentID).then(function (result) {
//     console.log('1\n' + result);
//     console.log('2\n' + result.GroupID);
//     const j = JSON.parse(result.GroupID.text())
//     console.log('3\n' + j);
// })

router.get('/all_projects', function(req, res) {
    Promise.all([
        studentModel.getStudentByStudentID(studentID),
        proposalModel.getAllProposals('approved'),
        proposalModel.getProposalByStudentID(studentID),
    ])
        .then(function(result) {
            const student = result[0];
            const allProposals = result[1];
            const myProposal = result[2];
            // console.log('1' + student);
            console.log('2' + allProposals);
            // console.log('3' + myProposal.GroupID)
            res.render('student/all_projects', {
                pageTitle: 'All Projects',
                username: student.Name,
                myProposal: myProposal,
                allProposals: allProposals,
            });
        });
});

router.get('/homepage', function(req, res) {
    Promise.all([
        studentModel.getStudentByStudentID(studentID),
        teamModel.getTeamByStudentID(studentID),

    ])
        .then(function(result) {
            const student = result[0];
            res.render('student/homepage', {
                pageTitle: 'Homepage',
                username: student.Name,
            });
        });
});


module.exports = router;
