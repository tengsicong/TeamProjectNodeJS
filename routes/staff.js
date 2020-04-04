const express = require('express');
const router = express.Router();
const studentModel = require('../models/student');
const proposalModel = require('../models/proposal');
const staffModel = require('../models/staff');
const teamModel = require('../models/team');

const staffID = String('5e7a97ab66135760069ca372');

// let s;
// async function getS(id) {
//     s = await proposalModel.getProposalByUserID(id).then((result) => {
//         return result;
//     });
// }
// getS(studentID)
// console.log(s[0]);

router.get('/my_project', function(req, res) {
    Promise.all([
        staffModel.getStafftByID(staffID),
        staffModel.getAllProjects(),
    ])
    .then(function(result) {
        const staff = result[0];
        const allProjects = result[1];
        res.render('staff/my_project', {
            pageTitle: 'My Projects',
            username: staff.Name,
            allProjects: allProjects,
        });
    });
});
// router.get()


module.exports = router;