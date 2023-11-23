db models
    students 
    [   
        studentID(Number, unique), 
        username(String, unique), 
        password(hash?),
        firstname(String), 
        lastname(String),
        email(String),
        dob(date),
        department(String),
        program(String) 
    ]

    admin
    [
        username(String, unqiue)
        hash(password)
    ]

    courses
    [
        term(Number),
        courseCode(String, unique),
        courseName(String, unique),
        startDate(date),
        endDate(date),
        courseFee(Number),
        courseDescription(String)
    ]

    enrollments
    [
        studentID(Number),
        term(Number),
        courseCode(String)
    ]

    enquiries 
    [
        studentID(Number), 
        subject(String), 
        message(String), 
        phone(String)
    ]
