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
    {
        term: 4,
        courseCode: "New0000",
        courseName: "New Course Name",
        startDate: "2023-10-01",
        endDate: "2023-10-28",
        courseFee: 100,
        courseDescription: "Description"
    },
    {
        term: 4,
        courseCode: "pr1112",
        courseName: "Project New Course",
        startDate: "2023-10-14",
        endDate: "2023-10-14",
        courseFee: 100,
        courseDescription: "Description"
    },
    {
        term: 3,
        courseCode: "New333",
        courseName: "Term 3 New",
        startDate: "2023-10-07",
        endDate: "2023-10-13",
        courseFee: 100,
        courseDescription: "Description"
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
{
    firstName: "Donna", lastName: "Meagle", password: "donna", username: "donna", confirmPassword: "",
    email: "donna@school.com", dob: "2023-10-17", department: "Software Development", program: "Certificate (6-months)", studentID: 10001
},
{
    firstName: "Donna", lastName: "Meagle", password: "donna", username: "donna2", confirmPassword: "",
    email: "donna@school.com", dob: "2023-10-13", department: "Software Development", program: "Diploma", studentID: 10002
},
]

export const admins = [{ username: "adminJerry", password: "adM1n" }, { username: "adminBadboy", password: "adM!n" }]

export const enrollments0 = [
    { studentID: 9998, term: 1, courseCode: "IS1111" }, 
    { studentID: 9998, term: 1, courseCode: "C++111" }, 
    { studentID: 9998, term: 4, courseCode: "Pro444" },
    { studentID: 9998, term: 3, courseCode: "Pr333" },
    { studentID: 9998, term: 3, courseCode: "C++333" },
    { studentID: 9998, term: 3, courseCode: "CompM333" },
    { studentID: 9998, term: 3, courseCode: "IS333" },
    { studentID: 9998, term: 3, courseCode: "New333" },
    { studentID: 10001, term: 4, courseCode: "Web444" },
]


export const enquiries0 = [
    {studentID: '10001', subject: 'Hi From Donna', message: 'hello', phone: '1234'},
    {studentID: '', subject: 'Hi From Guest', message: 'I want to know more about the school.', phone: '2222'},
    {studentID: '9998', subject: 'Hi Im Tom', message: 'Hiiii', phone: '55555'},
    
    
]

