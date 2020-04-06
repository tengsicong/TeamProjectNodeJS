const express = require('express');
const session = require('express-session');
const router = express.Router();
const mongoose = require('mongoose');
const clientModel = require('../models/client');
const studentModel = require('../models/student');
const staffModel = require('../models/staff');

module.exports = router;