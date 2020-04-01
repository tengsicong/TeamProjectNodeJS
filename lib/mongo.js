const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb, {dbName: 'TeamProject'})

exports.students = mongolass.model('students', {
    StudentID: {type: 'Number', required: true},
    UserName: {type: 'string', required: true},
    Password: {type: 'string', required: true},
    Name: {type: 'string', required: true},
    GroupID: {type: 'Number'},
    PeoplePreference: [Number],
    Mark: [Number],
});


exports.admins = mongolass.model('admins', {
    AdminID: {type: 'Number', required: true},
    UserName: {type: 'string', required: true},
    Password: {type: 'string', required: true},
});


exports.client_meetings = mongolass.model('client_meetings', {
    ClientMeetingID: {type: 'Number', required: true},
    GroupID: {type: 'Number'},
    Date: {type: 'Date', required: true},
    Place: {type: 'string', required: true},
    ClientID: {type: 'Number', required: true},
});

