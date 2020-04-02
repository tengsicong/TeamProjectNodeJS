const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const {Schema} = require('mongolass');
const mongolass = new Mongolass()
mongolass.connect(config.mongodb, {dbName: 'TeamProject'})

const Reply = new Schema('Reply', {
    Author: {type: 'String', required: true},
    Comment: {type: 'String', required: true},
    ReplyDate: {type: 'Date', required: true},
})

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

/* Client Part*/
exports.clients = mongolass.model('clients', {
    ClientID: {type: 'Number', required: true},
    UserName: {type: 'string', required: true},
    Password: {type: 'string', required: true},
    Name: {type: 'string', required: true},
    Email: {type: 'string', required: true},
    GroupID: [Number],
    AllProposal: [Number],
});


exports.proposals = mongolass.model('proposals', {
    ProposalID: {type: 'Number', required: true},
    Status: {type: 'string', required: true},
    Date: {type: 'Date'},
    Topic: {type: 'string', required: true},
    Content: {type: 'string', required: true},
    GroupID: [Number],
    StaffID: [Number],
    Reply: [Reply],
});
/* Client Part*/

/* Staff Part*/
exports.staffs = mongolass.model('staffs', {
    StaffID: {type: 'Number', required: true},
    Name: {type: 'String', required: true},
    UserName: {type: 'String', required: true},
    Password: {type: 'String', required: true},
    // GroupID: ['Number'],
});

exports.staffsMeetings = mongolass.model('staffs_meetings', {
    StaffMeetingID: {type: 'Number', required: true},
    GroupID: {type: 'Number', required: true},
    Date: {type: 'Date', required: true},
    Venue: {type: 'String', required: true},
    StaffID: {type: 'Number', required: true},
    TemporaryStaffID: {type: 'Number', required: true},
    RecordID: {type: 'Number', required: true},
});

exports.staffMeetingRecords = mongolass.model('staff_meeting_records', {
    RecordID: {type: 'Number', required: true},
    Date: {type: 'Date', required: true},
    LastMeetingNote: {type: 'String', required: true},
    AchievePlan: {type: 'String', required: true},
    Change: [Boolean],
    ChangeOther: {type: 'String'},
    RequirementCapture: {type: 'Double', required: true},
    TeamProgress: {type: 'Number', required: true},
    TimeSheets: {type: 'Number', required: true},
    ClearPlan: {type: 'Number', required: true},
    Dynamics: {type: 'Number', required: true},
    AnyOtherNotes: {type: 'String', required: true},
});

exports.studentStaffQAs = mongolass.model('student_staff_qas', {
    QuestionID: {type: 'Number', required: true},
    GroupID: {type: 'Number', required: true},
    Topic: {type: 'String', required: true},
    Replies: [Reply],
});
/* Staff Part*/


//test
const test = mongolass.model('staff_meeting_records', {
    RecordID: {type: 'Number', required: true},
    Date: {type: 'Date', required: true},
    LastMeetingNote: {type: 'String', required: true},
    AchievePlan: {type: 'String', required: true},
    Change: [Boolean],
    ChangeOther: {type: 'String'},
    RequirementCapture: {type: 'Double', required: true},
    TeamProgress: {type: 'Number', required: true},
    TimeSheets: {type: 'Number', required: true},
    ClearPlan: {type: 'Number', required: true},
    Dynamics: {type: 'Number', required: true},
    AnyOtherNotes: {type: 'String', required: true},
});

test
    .find()
    .exec()
    .then(console.log)
    .catch(console.error);
//test
