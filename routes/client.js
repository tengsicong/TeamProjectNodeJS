const express = require('express');
const router = express.Router();
const clientModel = require('../models/client');
const proposalModel = require('../models/proposal');
const teamModel = require('../models/team');
const mongoose = require('mongoose');
const studentModel = require('../models/student');
const clientMeetingModel = require('../models/clientmeetings');

const clientID = mongoose.Types.ObjectId('5e7d2198f8f7d40d64f332d5');


router.get('/myproject', function(req, res, next) {
    Promise.all([
        clientModel.getClientByClientID(clientID),
        proposalModel.getProposalByClientID(clientID),
    ])
        .then(function(proposals) {
            const client = proposals[0];

            res.render('ClientPart/client_myproposals', {
                proposals: proposals[1],
                pageTitle: 'My Projects',
                username: client.Name,
            });
        })
        .catch(next);
    // res.render('ClientPart/client_myproposals');
});

router.get('/myproject/create_project', function(req, res,next) {
    Promise.all([
        clientModel.getClientByClientID(clientID),
    ])
        .then(function(result) {
            const client = result[0];

            res.render('ClientPart/client_create_project', {
                pageTitle: 'Create Project',
                username: client.Name,
            });
        })
        .catch(next);
});

router.get('/myproject/project_approved', function(req, res, next) {
    const proposalID = mongoose.Types.ObjectId(req.query.id);
    Promise.all([
        proposalModel.getProposalByProposalID(proposalID),
        clientModel.getClientByProposalID(proposalID),
        teamModel.getGroupByProposalID(proposalID),
    ])
        .then(function(result) {
            res.render('ClientPart/client_project_approved', {
                proposal: result[0],
                pageTitle: result[0].Topic,
                username: result[1].Name,
                teams: result[2],
            });
        })
        .catch(next);
});

router.get('/myproject/project_pending', function(req, res, next) {
    //console.log(req.query.id);
    const proposalID = mongoose.Types.ObjectId(req.query.id);
    Promise.all([
        proposalModel.getProposalByProposalID(proposalID),
        clientModel.getClientByProposalID(proposalID),
    ])
        .then(function(proposal) {
            console.log(proposal);
            res.render('ClientPart/client_project_pending', {
                proposal: proposal[0],
                pageTitle: proposal[0].Topic,
                username: proposal[1].Name,
                Replies: result[0].Replies,
            });
        })
        .catch(next);
});

router.get('/myproject/project_rejected', function(req, res, next) {
    //console.log(req.query.id);
    const proposalID = mongoose.Types.ObjectId(req.query.id);
    Promise.all([
        proposalModel.getProposalByProposalID(proposalID),
        clientModel.getClientByProposalID(proposalID),
    ])
        .then(function(result) {
            res.render('ClientPart/client_project_rejected', {
                proposal: result[0],
                pageTitle: result[0].Topic,
                username: result[1].Name,
                Replies: result[0].Replies,
            });
        })
        .catch(next);
});


router.get('/edit_project', function(req, res,next) {
    const proposalID = mongoose.Types.ObjectId(req.query.id);
    Promise.all([
        proposalModel.getProposalByProposalID(proposalID),
        clientModel.getClientByProposalID(proposalID),
    ])
        .then(function(result) {
            res.render('ClientPart/client_edit_project', {
                proposal: result[0],
                pageTitle: 'Edit Project',
                username: result[1].Name,
            });
        })
        .catch(next);
});

router.get('/myteam', function(req, res,next) {
    Promise.all([
        clientModel.getClientByClientID(clientID),
        proposalModel.getProposalByClientID(clientID),
    ])
        .then(function(result) {
            res.render('ClientPart/client_myteams', {
                proposals: result[1],
                pageTitle: 'My Teams',
                username: result[0].Name,
            });
        })
        .catch(next);
});

router.get('/myteam/teampage', function(req, res,next) {
    const teamID = mongoose.Types.ObjectId(req.query.id);
    Promise.all([
        clientModel.getClientByClientID(clientID),
        teamModel.getTeamByTeamID(teamID),
    ])
        .then(function(result) {
            console.log(result[1].ClientMeetingID[0].Date)
            res.render('ClientPart/client_teampage', {
                team: result[1],
                pageTitle: 'SSIT TEAM'+result[1].TeamName,
                username: result[0].Name,
                meetings: result[1].ClientMeetingID,
            });
        })
        .catch(next);
});


router.get('/myteam/teammark', function(req, res, next) {
    const teamID = mongoose.Types.ObjectId(req.query.id);
    Promise.all([
        clientModel.getClientByClientID(clientID),
        teamModel.getTeamByTeamID(teamID),
    ])
        .then(function(result) {
            console.log(result[1].ClientMeetingID[0].Date)
            res.render('ClientPart/client_teammark', {
                team: result[1],
                pageTitle: 'SSIT TEAM '+result[1].TeamName+' Mark',
                username: result[0].Name,
                meetings: result[1].ClientMeetingID,
            });
        })
        .catch(next);
});



router.get('/mytimetable', function(req, res,next) {
    Promise.all([
        clientModel.getClientByClientID(clientID),
        clientMeetingModel.getClientMeetingByClientID(clientID),
    ])
        .then(function(result) {
            res.render('ClientPart/client_mytimetable', {
                meetings: result[1],
                pageTitle: 'My TimeTable',
                username: result[0].Name,
            });
        })
        .catch(next);
});




module.exports = router;
