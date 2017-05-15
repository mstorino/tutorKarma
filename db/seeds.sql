SELECT DATABASE tutor_db;



INSERT INTO Users (firstName, lastName, about, photo, email, role, createdAt, updatedAt) VALUES
("rahul", "nallappa","rad learner and teacher", "this is a photo", "email.com",  "tutor", "2017-12-22", "2017-12-22");

INSERT INTO Users (firstName, lastName, about, photo, email, role, createdAt, updatedAt) VALUES
("Bill", "Blue","something about", "this is a photo", "email1.com",  "tutor", "2017-12-12", "2017-11-22");

INSERT INTO Users (firstName, lastName, about, photo, email, role, createdAt, updatedAt) VALUES
("Jane", "Doe","something about jane", "this is a photo", "email2.com",  "tutor", "2017-10-12", "2017-11-12");



INSERT INTO useravailabilities (available, createdAt, updatedAt, UserId, AvailabilityId) VALUES
(true, "2017-12-12", "2017-11-22", 1, 1);
INSERT INTO useravailabilities (available, createdAt, updatedAt, UserId, AvailabilityId) VALUES
(true, "2017-10-12", "2017-11-22", 1, 2);
INSERT INTO useravailabilities (available, createdAt, updatedAt, UserId, AvailabilityId) VALUES
(true, "2017-01-12", "2017-02-22",1, 3);


INSERT INTO availabilities (day, timeSlot, createdAt, updatedAt) VALUES
("Monday", "10:00 AM - 11:00 AM", "2017-12-13", "2017-12-22");
INSERT INTO availabilities (day, timeSlot, createdAt, updatedAt) VALUES
("Tuesday", "10:00 AM - 11:00 AM", "2017-10-13", "2017-07-22");
INSERT INTO availabilities (day, timeSlot, createdAt, updatedAt) VALUES
("Wednesday", "10:00 AM - 11:00 AM", "2017-09-13", "2017-08-22");



INSERT INTO userSubjects (subject, createdAt, updatedAt,
UserId, subjectId) VALUES 
(true, "2017-08-17", "2017-08-19",1 ,2);

INSERT INTO userSubjects (subject, createdAt, updatedAt,
UserId, subjectId) VALUES 
(true, "2017-08-17", "2017-08-19",2 ,2);

INSERT INTO userSubjects (subject, createdAt, updatedAt,
UserId, subjectId) VALUES 
(true, "2017-08-17", "2017-08-19",1 ,1);




INSERT INTO subjects (subjectName, createdAt, updatedAt) VALUES
("Chemistry", "2017-12-22", "2017-12-22");
INSERT INTO subjects (subjectName, createdAt, updatedAt) VALUES
("Calculus", "2017-11-21", "2017-12-22");
INSERT INTO subjects (subjectName, createdAt, updatedAt) VALUES
("Philosophy", "2017-10-21", "2017-12-22");


INSERT INTO sessions (sessionState, createdAt, updatedAt, tutor_id, student_id, SubjectId, AvailabilityId) VALUES
("scheduled", "2017-09-22", "2017-11-22", 1, 2, 1, 1);

INSERT INTO sessions (sessionState, createdAt, updatedAt, tutor_id, student_id, SubjectId, AvailabilityId) VALUES
("scheduled", "2017-05-03", "2017-03-22", 2, 1, 3, 3);


INSERT INTO sessions (sessionState, createdAt, updatedAt, tutor_id, student_id, SubjectId, AvailabilityId) VALUES
("scheduled", "2017-05-03", "2017-03-22", 2, 2, 2, 3);