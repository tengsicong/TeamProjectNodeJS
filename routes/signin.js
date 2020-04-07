const config = require('config-lite')(__dirname);
const express = require('express');
const session = require('express-session');
const router = express.Router();
const mongoose = require('mongoose');
const clientModel = require('../models/client');
const studentModel = require('../models/student');
const staffModel = require('../models/staff');


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
