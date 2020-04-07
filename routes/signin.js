const config = require('config-lite')(__dirname);
const express = require('express');
const session = require('express-session');
const router = express.Router();
const mongoose = require('mongoose');
const clientModel = require('../models/client');
const studentModel = require('../models/student');
const staffModel = require('../models/staff');

router.post('/', function(req, res) {
    const email = req.fields.email;
    const pw = req.fields.password;

    Promise.all([
        staffModel.getStaffByUserName(email),
    ])
        .then(function(result) {
            const staff = result[0];

            if (!staff && pw === staff.password) {
                req.session.userinfo = staff.UserName;
                req.session.username = staff.Name;
                res.redirect('/staff/my_project');
            }
            else {
                res.redirect('/signin');
                throw new Error('Invalid username or password');
            }
        });
});

router.get('/', function(req, res) {
    if (req.session.userinfo) {
        res.redirect('/staff/my_project');
    }
    else {
        res.render('portal/signin', {
            pageTitle: 'Team Project - Signin',
        });
    }
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
