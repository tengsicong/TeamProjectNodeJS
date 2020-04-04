const express = require('express');
const router = express.Router();
const clientModel = require('../models/client');
const proposalModel = require('../models/proposal');
const mongoose = require('mongoose');

const clientID = mongoose.Types.ObjectId('5e7d2198f8f7d40d64f332d5');


router.get('/myproject', function(req, res, next) {
    Promise.all([
        clientModel.getClientByID(clientID),
        proposalModel.getProposalByUserID(clientID),
    ])
        .then(function (proposals) {
            const client = proposals[0];

            res.render('ClientPart/client_myproposals', {
                proposals: proposals[1],
                pageTitle: 'My Projects',
                username: client.Name,
            })
        })
        .catch(next)
    //res.render('ClientPart/client_myproposals');
});
// router.get()

router.get('/myproject/create_project',function (req,res) {
    res.render('ClientPart/client_create_project');
});

router.get('/myteam',function (req,res) {
    res.render('ClientPart/client_myteams');
});

router.get('/mytimetable',function (req,res) {
    res.render('ClientPart/client_mytimetable');
});

router.get('/myproject/project_approved',function (req,res) {
    res.render('ClientPart/client_project_approved');
});

router.get('/myproject/project_pending',function (req,res) {
    res.render('ClientPart/client_project_pending');
});

router.get('/myproject/project_rejected',function (req,res) {
    res.render('ClientPart/client_project_rejected');
});

router.get('/myproject/project/edit_project',function (req,res) {
    res.render('ClientPart/client_edit_project');
});

router.get('/myteam',function (req,res) {
    res.render('ClientPart/client_myteams');
});

router.get('/myteam/team_1',function (req,res) {
    res.render('ClientPart/client_team_1');
});

router.get('/myteam/teammark',function (req,res) {
    res.render('ClientPart/client_teammark');
});

module.exports = router;
