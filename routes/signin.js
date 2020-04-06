const express = require('express');
const session = require('express-session');
const router = express.Router();
const mongoose = require('mongoose');
const clientModel = require('../models/client');
const studentModel = require('../models/student');
const staffModel = require('../models/staff');

router.get('/', function(req, res) {
    res.render('portal/signin', {
        pageTitle: 'Team Project - Signin',
    });
});

router.post('/staff/my_project', function(req, res) {
    const email = req.fields.email;
    const pw = req.fields.password;

    Promise.all([
        staffModel.getStaffByUserName(email),
        staffModel.getAllocatedTeamByStaffID(staffID)
    ])
    .then(function(result) {
        let staff = result[0];
        let allTeams = result[1];

        if(!staff && pw === staff.password) {
            req.session.user = staff.username;
            res.render('staff/my_project', {
                pageTitle: 'My Projects',
                username: staff.Name,
                allTeams: allTeams,
            });
        }
        else {
            res.render('portal/signin', {pageTitle: 'Team Project - Signin'});
            throw new Error('Invalid username or password');
        }
    });
});

/**
* @param {Object} obj
* @return {boolean} allocated team
*/
function isEmptyObject(obj) {
    　　for (var key in obj) {
    　　　　return false;
    　　}
    　　return true;
};

module.exports = router;