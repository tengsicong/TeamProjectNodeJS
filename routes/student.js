const express = require('express');
const router = express.Router();
const studentModel = require('../models/student');
const proposalModel = require('../models/proposal');

const studentID = Number(20000);

// proposalModel.getProposalByUserID(Number(20000)).then(console.log);

router.get('/all_project', function(req, res) {
    Promise.all([
        studentModel.getStudentByID(studentID),
        proposalModel.getAllProposals(),
        proposalModel.getProposalByUserID(studentID),
    ])
        .then(function(result) {
            const student = result[0]
            const allProposals = result[1];
            const myProposal = result[2]
            res.render('student/all_project', {
                pageTitle: 'All Projects',
                username: student.Name,
                myProposal: myProposal[0],
                allProposals: allProposals,
            });
        });
})
// router.get()


module.exports = router;
