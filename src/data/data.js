// • For each program, the following details should be visible on the system.
// o Course code, course name, starting date, ending date, fees, and description.
export var importantDates = [
    { term: 1, start: "September 1", end: "December 20", },
    { term: 2, start: "January 5", end: "May 2" },
    { term: 3, start: "September 1", end: "December 20" },
    { term: 4, start: "January 5", end: "May 2" },
]
export const DEPARTMENTS = ["Software Development", "Business", "Emtertainment"];
export const PROGRAMS = ["Diploma", "Post-Diploma", "Certificate (3-months)", "Certificate (6-months)"];

export var allCourses0 = [
    {
        term: 1,
        courseCode: "Pr111",
        courseName: "Project Management 1",
        startDate: "September 1",
        endDate: "December 20",
        courseFee: 1867.60,
        courseDescription: "This course teaches how to manage a project."
    },
    {
        term: 1,
        courseCode: "C++111",
        courseName: "C++ Programming Fundamentals",
        startDate: "September 1",
        endDate: "December 20",
        courseFee: 1867.60,
        courseDescription: "This course teaches C++."
    },
    {
        term: 1,
        courseCode: "CompM1111",
        courseName: "Computer Maintenance",
        startDate: "September 1",
        endDate: "December 20",
        courseFee: 1867.60,
        courseDescription: "This course teaches Maintenance."
    },
    {
        term: 1,
        courseCode: "IS1111",
        courseName: "Information Security 1",
        startDate: "September 1",
        endDate: "December 20",
        courseFee: 1867.60,
        courseDescription: "This course teaches security."
    },
    {
        term: 2,
        courseCode: "Net222",
        courseName: "Networking",
        startDate: "January 5",
        endDate: "May 2",
        courseFee: 1867.60,
        courseDescription: "This course teaches how to make a network."
    },
    {
        term: 2,
        courseCode: "Web222",
        courseName: "Web technology",
        startDate: "January 5",
        endDate: "May 2",
        courseFee: 1867.60,
        courseDescription: "This course teaches Web Tech."
    },
    {
        term: 2,
        courseCode: "Pro222",
        courseName: "Project Management",
        startDate: "January 5",
        endDate: "May 2",
        courseFee: 1867.60,
        courseDescription: "This course teaches how to manage a project."
    },
    {
        term: 3,
        courseCode: "Pr333",
        courseName: "Advanced Project Management 1",
        startDate: "September 1",
        endDate: "December 20",
        courseFee: 1867.60,
        courseDescription: "This course teaches how to manage an advanced project."
    },
    {
        term: 3,
        courseCode: "C++333",
        courseName: "Advanced C++ Programming Fundamentals",
        startDate: "September 1",
        endDate: "December 20",
        courseFee: 1867.60,
        courseDescription: "This course teaches advanced  C++."
    },
    {
        term: 3,
        courseCode: "CompM333",
        courseName: "Advanced Computer Maintenance",
        startDate: "September 1",
        endDate: "December 20",
        courseFee: 1867.60,
        courseDescription: "This course teaches advanced maintenance."
    },
    {
        term: 3,
        courseCode: "IS333",
        courseName: "Advanced Information Security 1",
        startDate: "September 1",
        endDate: "December 20",
        courseFee: 1867.60,
        courseDescription: "This course teaches advanced security."
    },
    {
        term: 4,
        courseCode: "Net444",
        courseName: "Advanced Networking",
        startDate: "January 5",
        endDate: "May 2",
        courseFee: 1867.60,
        courseDescription: "This course teaches how to make advanced network."
    },
    {
        term: 4,
        courseCode: "Web444",
        courseName: "Advanced Web technology",
        startDate: "January 5",
        endDate: "May 2",
        courseFee: 1867.60,
        courseDescription: "This course teaches advanced Web Tech."
    },
    {
        term: 4,
        courseCode: "Pro444",
        courseName: "Advanced Project Management",
        startDate: "January 5",
        endDate: "May 2",
        courseFee: 1867.60,
        courseDescription: "This course teaches how to manage an advanced project."
    },
]




export const studentUsers0 = [{
    firstName: "Ron", lastName: "Swanson", password: "ron", username: "ron", confirmPassword: "",
    email: "ronswanson@school.com", dob: "1993-2-4", department: "Software Development", program: "Diploma", studentID: 10000
},
{
    firstName: "Leslie", lastName: "Knope", password: "leslie", username: "leslie", confirmPassword: "",
    email: "leslieknope@school.com", dob: "1995-8-15", department: "Software Development", program: "Certificate (3-months)", studentID: 9999
},
{
    firstName: "Tom", lastName: "Haverford", password: "tom", username: "tom", confirmPassword: "",
    email: "tom@school.com", dob: "1994-12-24", department: "Software Development", program: "Diploma", studentID: 9998
},

{
    firstName: "Ann", lastName: "Perkins", password: "ann", username: "ann", confirmPassword: "",
    email: "annperkins@school.com", dob: "1992-5-30", department: "Software Development", program: "Post-Diploma", studentID: 9997
},

{
    firstName: "Chris", lastName: "Traeger", password: "chris", username: "chris", confirmPassword: "",
    email: "chris@school.com", dob: "1991-1-28", department: "Software Development", program: "Certificate (6-months)", studentID: 9996
},
{
    firstName: "April", lastName: "Ludgate", password: "april", username: "april", confirmPassword: "",
    email: "aprilludgate@school.com", dob: "1996-3-1", department: "Software Development", program: "Certificate (6-months)", studentID: 9995
},
{
    firstName: "Andy", lastName: "Dwyer", password: "andy", username: "andy", confirmPassword: "",
    email: "andydwyer@school.com", dob: "1993-7-6", department: "Software Development", program: "Post-Diploma", studentID: 9994
},
{
    firstName: "Ben", lastName: "Wyatt", password: "ben", username: "ben", confirmPassword: "",
    email: "benwyatt@school.com", dob: "1989-2-19", department: "Software Development", program: "Certificate (3-months)", studentID: 9993
},
]

export const admins = [{ username: "adminJerry", password: "adM1n" }, { username: "adminBadboy", password: "adM!n" }]

export const enrollments0 = [
    { studentID: 9998, term: 1, courseCode: "Pr111" }, 
    { studentID: 9998, term: 1, courseCode: "C++111" }, 
    { studentID: 9998, term: 4, courseCode: "Pro444" },
]


export const enquiries0 = [
    {studentID: '9998', subject: 'Hi', message: 'hi', phone: '432'},
    {studentID: '9996', subject: '2', message: '3', phone: '4'},
    {studentID: '9998', subject: '2', message: '3', phone: '4'},
    {studentID: '2000', subject: '2', message: '3', phone: '4'},
    
    
]

