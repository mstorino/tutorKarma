CREATE DATABASE tutor_db;

USE tutor_db;

INSERT INTO subjects (subjectName, createdAt, updatedAt) VALUES
("Chemistry", "2017-12-22", "2017-12-22");
INSERT INTO subjects (subjectName, createdAt, updatedAt) VALUES
("Calculus", "2017-11-21", "2017-12-22");
INSERT INTO subjects (subjectName, createdAt, updatedAt) VALUES
("Philosophy", "2017-10-21", "2017-12-22");


INSERT INTO Users (firstName, lastName, about, photo, email, role, createdAt, updatedAt) VALUES
("rahul", "nallappa","rad learner and teacher", "this is a photo", "rahulnallappa@email1.com",  "tutor", "2017-12-22", "2017-12-22"),

("Bill", "Blue","something about", "this is a photo", "billBlue@email1.com",  "tutor", "2017-12-12", "2017-11-22"),

("Jane", "Doe","something about jane", "this is a photo", "janeDoe@email1.com",  "tutor", "2017-10-12", "2017-11-12"),

("Johnny", "Appleseed","something about", "this is a photo", "johnnyAppleseed@email1.com",  "tutor", "2017-11-12", "2017-10-22"),

("Betsy", "Ross","something about", "this is a photo", "betsyRoss@email1.com",  "tutor", "2017-12-12", "2017-11-22"),

("Paul", "Bunyan","something about", "this is a photo", "paulbunyan@email1.com",  "tutor", "2017-12-12", "2017-11-22"),

("Alexander", "Hamilton","something about", "this is a photo", "alexanderHamilton@email1.com",  "tutor", "2017-12-12", "2017-11-22"),
   
("George", "Washington","something about", "this is a photo", "georgeWashington@email1.com",  "tutor", "2017-12-12", "2017-11-22");

<<<<<<< HEAD


=======
>>>>>>> 055fb78968d45b7d7a5f5eaa616fb7ae9ab2ad90
INSERT INTO availabilities (day, timeSlot, createdAt, updatedAt) VALUES
("Monday", "9:00 AM - 10:00 AM", "2017-12-13", "2017-12-22"),

("Monday", "10:00 AM - 11:00 AM", "2017-12-13", "2017-12-22"),

<<<<<<< HEAD
("Monday", "11:00 AM - 12:00 PM", "2017-12-13", "2017-12-22"),
=======
INSERT INTO sessions (sessionState, createdAt, updatedAt, tutor_id, student_id, SubjectId, AvailabilityId) VALUES
("scheduled", "2017-09-22", "2017-11-22", 1, 2, 1, 1);
INSERT INTO sessions (sessionState, createdAt, updatedAt, tutor_id, student_id, SubjectId, AvailabilityId) VALUES
("scheduled", "2017-05-03", "2017-03-22", 2, 1, 3, 3);
INSERT INTO sessions (sessionState, createdAt, updatedAt, tutor_id, student_id, SubjectId, AvailabilityId) VALUES
("scheduled", "2017-05-03", "2017-03-22", 2, 2, 2, 3);

INSERT INTO useravailabilities (available, createdAt, updatedAt, UserId, AvailabilityId) VALUES
(true, "2017-12-12", "2017-11-22", 1, 1);
INSERT INTO useravailabilities (available, createdAt, updatedAt, UserId, AvailabilityId) VALUES
(true, "2017-10-12", "2017-11-22", 1, 2);
INSERT INTO useravailabilities (available, createdAt, updatedAt, UserId, AvailabilityId) VALUES
(true, "2017-01-12", "2017-02-22",1, 3);


>>>>>>> 055fb78968d45b7d7a5f5eaa616fb7ae9ab2ad90

("Monday", "12:00 PM - 1:00 PM", "2017-12-13", "2017-12-22"),

("Monday", "1:00 PM - 2:00 PM", "2017-12-13", "2017-12-22"),

("Monday", "2:00 PM - 3:00 PM", "2017-12-13", "2017-12-22"),

("Monday", "3:00 PM - 4:00 PM", "2017-12-13", "2017-12-22"),

("Monday", "4:00 PM - 5:00 PM", "2017-12-13", "2017-12-22"),

("Tuesday", "9:00 AM - 10:00 AM", "2017-12-13", "2017-12-22"),

("Tuesday", "10:00 AM - 11:00 AM", "2017-12-13", "2017-12-22"),

("Tuesday", "11:00 AM - 12:00 PM", "2017-12-13", "2017-12-22"),

("Tuesday", "12:00 PM - 1:00 PM", "2017-12-13", "2017-12-22"),

("Tuesday", "1:00 PM - 2:00 PM", "2017-12-13", "2017-12-22"),

("Tuesday", "2:00 PM - 3:00 PM", "2017-12-13", "2017-12-22"),

("Tuesday", "3:00 PM - 4:00 PM", "2017-12-13", "2017-12-22"),

("Tuesday", "4:00 PM - 5:00 PM", "2017-12-13", "2017-12-22"),

("Wednesday", "9:00 AM - 10:00 AM", "2017-12-13", "2017-12-22"),

("Wednesday", "10:00 AM - 11:00 AM", "2017-12-13", "2017-12-22"),

("Wednesday", "11:00 AM - 12:00 PM", "2017-12-13", "2017-12-22"),

("Wednesday", "12:00 PM - 1:00 PM", "2017-12-13", "2017-12-22"),

("Wednesday", "1:00 PM - 2:00 PM", "2017-12-13", "2017-12-22"),

("Wednesday", "2:00 PM - 3:00 PM", "2017-12-13", "2017-12-22"),

("Wednesday", "3:00 PM - 4:00 PM", "2017-12-13", "2017-12-22"),

("Wednesday", "4:00 PM - 5:00 PM", "2017-12-13", "2017-12-22"),

("Thursday", "9:00 AM - 10:00 AM", "2017-12-13", "2017-12-22"),

("Thursday", "10:00 AM - 11:00 AM", "2017-12-13", "2017-12-22"),

("Thursday", "11:00 AM - 12:00 PM", "2017-12-13", "2017-12-22"),

("Thursday", "12:00 PM - 1:00 PM", "2017-12-13", "2017-12-22"),

("Thursday", "1:00 PM - 2:00 PM", "2017-12-13", "2017-12-22"),

("Thursday", "2:00 PM - 3:00 PM", "2017-12-13", "2017-12-22"),

("Thursday", "3:00 PM - 4:00 PM", "2017-12-13", "2017-12-22"),

("Thursday", "4:00 PM - 5:00 PM", "2017-12-13", "2017-12-22"),

("Friday", "9:00 AM - 10:00 AM", "2017-12-13", "2017-12-22"),

("Friday", "10:00 AM - 11:00 AM", "2017-12-13", "2017-12-22"),

("Friday", "11:00 AM - 12:00 PM", "2017-12-13", "2017-12-22"),

("Friday", "12:00 PM - 1:00 PM", "2017-12-13", "2017-12-22"),

("Friday", "1:00 PM - 2:00 PM", "2017-12-13", "2017-12-22"),

("Friday", "2:00 PM - 3:00 PM", "2017-12-13", "2017-12-22"),

("Friday", "3:00 PM - 4:00 PM", "2017-12-13", "2017-12-22"),

("Friday", "4:00 PM - 5:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "9:00 AM - 10:00 AM", "2017-12-13", "2017-12-22"),

("Saturday", "10:00 AM - 11:00 AM", "2017-12-13", "2017-12-22"),

("Saturday", "11:00 AM - 12:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "12:00 PM - 1:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "1:00 PM - 2:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "2:00 PM - 3:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "3:00 PM - 4:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "4:00 PM - 5:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "9:00 AM - 10:00 AM", "2017-12-13", "2017-12-22"),

("Saturday", "10:00 AM - 11:00 AM", "2017-12-13", "2017-12-22"),

("Saturday", "11:00 AM - 12:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "12:00 PM - 1:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "1:00 PM - 2:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "2:00 PM - 3:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "3:00 PM - 4:00 PM", "2017-12-13", "2017-12-22"),

("Saturday", "4:00 PM - 5:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "9:00 AM - 10:00 AM", "2017-12-13", "2017-12-22"),

("Sunday", "10:00 AM - 11:00 AM", "2017-12-13", "2017-12-22"),

("Sunday", "11:00 AM - 12:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "12:00 PM - 1:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "1:00 PM - 2:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "2:00 PM - 3:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "3:00 PM - 4:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "4:00 PM - 5:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "9:00 AM - 10:00 AM", "2017-12-13", "2017-12-22"),

("Sunday", "10:00 AM - 11:00 AM", "2017-12-13", "2017-12-22"),

("Sunday", "11:00 AM - 12:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "12:00 PM - 1:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "1:00 PM - 2:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "2:00 PM - 3:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "3:00 PM - 4:00 PM", "2017-12-13", "2017-12-22"),

("Sunday", "4:00 PM - 5:00 PM", "2017-12-13", "2017-12-22");




<<<<<<< HEAD


INSERT INTO subjects (subjectName, createdAt, updatedAt) VALUES
("Math", "2017-12-22", "2017-12-22"),
("Chemistry", "2017-12-22", "2017-12-22"),
("Biology", "2017-12-22", "2017-12-22"),
("English", "2017-12-22", "2017-12-22"),
("Spanish", "2017-10-21", "2017-12-22"),
("Economics", "2017-10-21", "2017-12-22"),
("Philosophy", "2017-10-21", "2017-12-22"),

("French", "2017-10-21", "2017-12-22");





INSERT INTO sessions (sessionState, createdAt, updatedAt, tutor_id, student_id, SubjectId, AvailabilityId) VALUES
("scheduled", "2017-09-22", "2017-11-22", 1, 2, 1, 1);

INSERT INTO sessions (sessionState, createdAt, updatedAt, tutor_id, student_id, SubjectId, AvailabilityId) VALUES
("scheduled", "2017-05-03", "2017-03-22", 2, 1, 3, 3);


INSERT INTO sessions (sessionState, createdAt, updatedAt, tutor_id, student_id, SubjectId, AvailabilityId) VALUES
("scheduled", "2017-05-03", "2017-03-22", 2, 2, 2, 3);




INSERT INTO userSubjects (subject, createdAt, updatedAt,
UserId, subjectId) VALUES 
(true, "2017-08-17", "2017-08-19",1 ,2);

INSERT INTO userSubjects (subject, createdAt, updatedAt,
UserId, subjectId) VALUES 
(true, "2017-08-17", "2017-08-19",2 ,2);

INSERT INTO userSubjects (subject, createdAt, updatedAt,
UserId, subjectId) VALUES 
(true, "2017-08-17", "2017-08-19",1 ,1);




INSERT INTO useravailabilities (available, createdAt, updatedAt, UserId, AvailabilityId) VALUES
(true, "2017-12-12", "2017-11-22", 1, 1);
INSERT INTO useravailabilities (available, createdAt, updatedAt, UserId, AvailabilityId) VALUES
(true, "2017-10-12", "2017-11-22", 1, 2);
INSERT INTO useravailabilities (available, createdAt, updatedAt, UserId, AvailabilityId) VALUES
(true, "2017-01-12", "2017-02-22",1, 3);
=======
>>>>>>> 055fb78968d45b7d7a5f5eaa616fb7ae9ab2ad90
