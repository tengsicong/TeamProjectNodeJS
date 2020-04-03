const config = require('config-lite')(__dirname)
const mongoose = require('mongoose');
const Mongolass = require('mongolass')
// const Schema = Mongolass.Schema;
// const mongolass = new Mongolass()
mongoose.connect(config.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'TeamProject',
});

const Reply = new mongoose.Schema({
    Author: String,
    Comment: String,
    ReplyDate: Date,
});

const Team = new mongoose.Schema({
    GroupID: Number,
    StaffID: Number,
})

exports.students = mongoose.model('students', {
    StudentID: Number,
    UserName: String,
    Password: String,
    Name: String,
    GroupID: Number,
    PeoplePreference: [Number],
    Mark: [Number],
});

exports.admins = mongoose.model('admins', {
    AdminID: Number,
    UserName: String,
    Password: String,
});

exports.client_meetings = mongoose.model('client_meetings', {
    ClientMeetingID: Number,
    GroupID: Number,
    Date: Date,
    Place: String,
    ClientID: Number,
});

exports.teams = mongoose.model('teams', {
    GroupID: Number,
    ProposalID: Number,
    StudentID: [Number],
    StaffID: Number,
    Preference: [Number],
    Representer: Number,
    ClientMark: [Number],
    StaffMark: [Number],
    ClientMeetingID: [Number],
    StaffMeetingID: [Number],
});

exports.changeMeetingRequests = mongoose.model('change_meeting_requests', {
    RequestID: Number,
    Role: String,
    MeetingID: Number,
    PersonID: Number,
    Status: String,
    NewMeetingTime: Date,
    NewPersonID: Number,
    RequestComment: {
        RequestName: String,
        Date: Date,
        Content: String,
    },
    AdminReply: {
        AdminName: String,
        Date: Date,
        Content: String,
    },
});

exports.clients = mongoose.model('clients', {
    ClientID: Number,
    UserName: String,
    Password: String,
    Name: String,
    Email: String,
    GroupID: [Number],
    AllProposal: [Number],
});

exports.proposals = mongoose.model('proposals', {
    ProposalID: Number,
    Status: String,
    Date: Date,
    Topic: String,
    Content: String,
    Team: [Team],
    Replies: [Reply],
});

exports.staffs = mongoose.model('staffs', {
    StaffID: Number,
    Name: String,
    UserName: String,
    Password: String,
    GroupID: [Number],
});

exports.staffsMeetings = mongoose.model('staffs_meetings', {
    StaffMeetingID: Number,
    GroupID: Number,
    Date: Date,
    Venue: String,
    StaffID: Number,
    TemporaryStaffID: Number,
    RecordID: Number,
});

exports.staffMeetingRecords = mongoose.model('staff_meeting_records', {
    RecordID: Number,
    Date: Date,
    LastMeetingNote: String,
    AchievePlan: String,
    Change: [Boolean],
    ChangeOther: String,
    RequirementCapture: Number,
    TeamProgress: Number,
    TimeSheets: Number,
    ClearPlan: Number,
    Dynamics: Number,
    AnyOtherNotes: String,
});

exports.studentStaffQAs = mongoose.model('student_staff_qas', {
    QuestionID: Number,
    GroupID: Number,
    Topic: String,
    Replies: [Reply],
});

exports.notices = mongoose.model('notices', {
    NoticeID: Number,
    Event: String,
    PersonId: Number,
});

exports.stages = ('stages', {
    Stages: Number,
});

const test1 = new mongoose.Schema({
    name: String,
    favourite: String,
})

const test2 = new mongoose.Schema({
    bookname: String,
    author: String,
})

// var person = mongoose.model('test1s', test1);
// var book = mongoose.model('test2s', test2);
// test1.virtual('test3s', {
//     ref: 'test2s',
//     localField: 'favourite',
//     foreignField: 'bookname',
// })
// person.find().populate('test3s').exec().then(function (result) {
//     console.log(result[0]);
//
// });
