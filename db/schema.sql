
CREATE DATABASE tutor_db;
USE tutor_db;

CREATE TABLE user
(
	id INTEGER (11)  AUTO_INCREMENT NOT NULL,
	name VARCHAR (50) NOT NULL,
	role VARCHAR (50) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE user_availability
(
	id INTEGER (11)  AUTO_INCREMENT NOT NULL,
	user_id INTEGER (11) NOT NULL,
	availability_id INTEGER (11) NOT NULL,
    available VARCHAR (50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE availability
(
	id INTEGER (11)  AUTO_INCREMENT NOT NULL,
	day VARCHAR (50) NOT NULL,
    time_slot VARCHAR (50) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE userSubject (
    id INTEGER (11) AUTO_INCREMENT NOT NULL,
	user_id INTEGER (11) NOT NULL,
    subject_id INTEGER (11) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE subject (
    id INTEGER (11) AUTO_INCREMENT NOT NULL,
    subjectName VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE session (
    id INTEGER (11) AUTO_INCREMENT NOT NULL,
    tutor_id INTEGER (11) NOT NULL,
    student_id INTEGER (11) NOT NULL,
    availability_id INTEGER (11) NOT NULL,
    state VARCHAR (30) NOT NULL,
     PRIMARY KEY (id)
)

USE tutor_db;


SELECT * FROM useravailabilities;

SELECT * FROM subjects;

INSERT INTO subjects (subjectName, createdAt, updatedAt) VALUES
("Chemistry", "2017-12-22", "2017-12-22");
INSERT INTO subjects (subjectName, createdAt, updatedAt) VALUES
("Calculus", "2017-11-21", "2017-12-22");
INSERT INTO subjects (subjectName, createdAt, updatedAt) VALUES
("Philosophy", "2017-10-21", "2017-12-22");

SELECT * FROM userSubjects;



desc Usersubjects;



INSERT INTO userSubjects (subject, createdAt, updatedAt,
UserId, subjectId) VALUES 
(true, "2017-08-14", "2017-08-15", 1, 1);



INSERT INTO users (firstName, lastName, about, photo, email, role,
createdAt, updatedAt) VALUES
("John", "Smith", "aboutTest", "photoTest", "tutor", );


INSERT INTO users (firstName, lastName, about, photo, email, role,
createdAt, updatedAt) VALUES
("Jane", "Williams", "aboutTest", "photoTest", "student");

INSERT INTO users (users (firstName, lastName, about, photo, email, role,
createdAt, updatedAt) VALUES
("Billy", "Brown", "aboutTest", "photoTest", "administrator");

INSERT INTO users (users (firstName, lastName, about, photo, email, role,
createdAt, updatedAt) VALUES
("Lady", "Luck", "aboutTest", "photoTest", "tutor");

INSERT INTO Users (firstName, lastName, about, photo, email, role, createdAt, updatedAt) VALUES
("rahul", "nallappa","rad learner and teacher", "this is a photo", "email.com",  "tutor", "2017-12-22", "2017-12-22");

INSERT INTO Users (firstName, lastName, about, photo, email, role, createdAt, updatedAt) VALUES
("Bill", "Blue","something about", "this is a photo", "email1.com",  "tutor", "2017-12-12", "2017-11-22");

INSERT INTO Users (firstName, lastName, about, photo, email, role, createdAt, updatedAt) VALUES
("Jane", "Doe","something about jane", "this is a photo", "email2.com",  "tutor", "2017-10-12", "2017-11-12");


SELECT * FROM users


