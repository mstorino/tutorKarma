
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