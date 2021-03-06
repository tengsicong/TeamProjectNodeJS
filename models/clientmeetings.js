const mongo = require('../lib/mongo');
const clientmeetings = mongo.client_meetings;
const student = mongo.students;
const client = mongo.clients;
const mongoose = require('mongoose');


module.exports = {
    getClientMeetingByClientID: function getClientMeetingByClientID(id) {
        return clientmeetings
            .find({ClientID:id})
            .populate('ClientID')
            .populate('GroupID')
            .exec()
    },
};
