const express = require('express');
const router = express.Router();
const proposalModel = require('../models/proposal');
const teamModel = require('../models/team');
const adminModel = require('../models/admin');
const mongoose = require('mongoose');
const adminID = mongoose.Types.ObjectId('5e7ce2e2ad9b3de5109cb8eb');
const Tid = mongoose.Types.ObjectId('5e7b6f794f4ed29e60233aa2');

adminModel.getAdminByID(adminID).then(console.log)
// const mongo = require('../lib/mongo');
// const admin = mongo.admins;
//
// admin
//     .find({_id: adminID})
//     .exec()
//     .then(console.log);

/* GET edit team page. */
router.get('/edit_team', function(req, res, next) {
    // const teamID = req.params.TeamId;
    // console.log(teamID);
    Promise.all([
        adminModel.getAdminByID(adminID),
        teamModel.getTeamByTeamID(Tid),
        proposalModel.getAllProposals(),
        // staffModel.getAllStaff(),
        // studentModel.getAllStudent(),
    ])
        .then(function(result) {
            const admin = result[0];
            // console.log(admin)
            const team = result[1];
            // console.log(team);
            const allProposal = result[2];
            // const allProposal = result[2];
            // const allStaff = result[3];
            // const allStudent = result [4];
            res.render('admin/edit_team', {
                pageTitle: 'Edit Team',
                admin: admin,
                team: team,
                allProposal: allProposal,
            });
        });
});



module.exports = router
