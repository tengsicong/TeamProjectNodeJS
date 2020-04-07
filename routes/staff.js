const express = require('express');
const router = express.Router();
const studentModel = require('../models/student');
const proposalModel = require('../models/proposal');
const staffModel = require('../models/staff');
const teamModel = require('../models/team');
const mongoose = require('mongoose')

const staffID = mongoose.Types.ObjectId('5e7a97ab66135760069ca372');

router.get('/my_project', function(req, res) {
    if (req.session.userinfo) {
        Promise.all([staffModel.getStaffByUserName(req.session.userinfo)])
            .then(function(result1) {
                const staff = result1[0];

                Promise.all([staffModel.getAllocatedTeamByStaffID(staff._id)])
                    .then(function(result2) {
                        const maxDisplay = 4;
                        const allTeams = result2[0];
                        let groupMember = [];
                        
                        for (let i = 0; i < allTeams.length; i++) {
                            //console.log(allTeams[i]);
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
    }
    else {
        res.redirect('/signin');
    }
});
// router.get()


module.exports = router;
