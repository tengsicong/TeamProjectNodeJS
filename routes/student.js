const express = require('express');
const router = express.Router();
const studentModel = require('../models/student');
const proposalModel = require('../models/proposal');
const staffModel = require('../models/staff');
const teamModel = require('../models/team');
const mongoose = require('mongoose');
const studentID = mongoose.Types.ObjectId('5e7b6ace4f4ed29e60233999');

router.get('/all_project', function(req, res) {
    Promise.all([
        studentModel.getStudentByID(studentID),
        proposalModel.getAllProposals(),
        proposalModel.getProposalByStudentID(studentID),
    ])
        .then(function(result) {
            const student = result[0];
            const allProposals = result[1];
            const myProposal = result[2];
            res.render('student/all_project', {
                pageTitle: 'All Projects',
                username: student.Name,
                myProposal: myProposal[0],
                allProposals: allProposals,
            });
        });
});
// router.get()


module.exports = router;
