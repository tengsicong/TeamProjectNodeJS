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
    GroupID: {type: 'Number', required: true},
    Date: {type: 'Date', required: true},
    Place: {type: 'string', required: true},
    ClientID: {type: 'Number', required: true},
});

exports.teams = mongolass.model('teams', {
    GroupID: {type: 'Number', required: true},
    ProposalID: {type: 'Number', required: true},
    StudentID: [Number],
    StaffID: {type: 'Number', required: true},
    Preference: [Number],
    Representer: {type: 'Number', required: true},
    ClientMark: [Number],
    StaffMark: [Number],
    ClientMeetingID: [Number],
    StaffMeetingID: [Number],
});

exports.changeMeetingRequests = mongolass.model('change_meeting_requests', {
    RequestID: {type: 'Number', required: true},
    Role: {type: 'String', required: true},
    MeetingID: {type: 'Number', required: true},
    PersonID: {type: 'Number', required: true},
    Status: {type: 'String', required: true},
    NewMeetingTime: {type: 'Date'},
    NewPersonID: {type: 'Number'},
    RequestComment: {
        RequestName: {type: 'String', required: true},
        Date: {type: 'Date'},
        Content: {type: 'String', required: true},
    },
    AdminReply: {
        AdminName: {type: 'String', required: true},
        Date: {type: 'Date'},
        Content: {type: 'String', required: true},
    },
});

