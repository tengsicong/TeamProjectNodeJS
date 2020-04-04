const express = require('express');
const router = express.Router();
const studentModel = require('../models/student');
const proposalModel = require('../models/proposal');
const staffModel = require('../models/staff');
const teamModel = require('../models/team');
const mongoose = require('mongoose')

const staffID =  mongoose.Types.ObjectId('5e7a97ab66135760069ca372');

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
        staffModel.getStaffByStaffID(staffID),
        staffModel.getAllocatedTeam(staffID)
    ])
    .then(function(result) {
        const staff = result[0];
        const allTeams = result[1];
        res.render('staff/my_project', {
            pageTitle: 'My Projects',
            username: staff.Name,
            allTeams: allTeams,
        });
    });
});
// router.get()


module.exports = router;
