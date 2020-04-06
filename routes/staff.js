const express = require('express');
const router = express.Router();
const studentModel = require('../models/student');
const proposalModel = require('../models/proposal');
const staffModel = require('../models/staff');
const teamModel = require('../models/team');
const mongoose = require('mongoose')

const staffID = mongoose.Types.ObjectId('5e7a97ab66135760069ca372');

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
        staffModel.getAllocatedTeamByStaffID(staffID)
    ])
        .then(function(result) {
            const maxDisplay = 4;
            const staff = result[0];
            const allTeams = result[1];
            let groupMember = [];

            for (let i = 0; i < allTeams.length; i++) {
                //console.log(allTeams[i].Representer);
                groupMember[i] = '';
                const max = (maxDisplay < allTeams[i].StudentID.length)? maxDisplay : allTeams[i].StudentID.length;
                for (let j = 0; j < max; j++) {
                    groupMember[i] = groupMember[i] + allTeams[i].StudentID[j].Name;
                    if (j < max - 1) {
                        groupMember[i] = groupMember[i] + ', ';
                    }
                    else {
                        if(allTeams[i].StudentID.length > maxDisplay) groupMember[i] = groupMember[i] + '...';
                    }
                }
            }
            res.render('staff/my_project', {
                pageTitle: 'My Projects',
                username: staff.Name,
                allTeams: allTeams,
                groupMember: groupMember,
            });
        });
});
// router.get()


module.exports = router;
