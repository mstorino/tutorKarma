INSERT INTO user (name, role) VALUES
("John Smith", "tutor");


INSERT INTO user (name, role) VALUES
("Jane Williams", "student");

INSERT INTO user (name, role) VALUES
("Billy Brown", "administrator");

INSERT INTO user (name, role) VALUES
("Lady Luck", "tutor");



INSERT INTO user_availability (user_id, availability_id, available) VALUES
(1, 1, true );
INSERT INTO user_availability (user_id, availability_id, available) VALUES
(1, 2, true );
INSERT INTO user_availability (user_id, availability_id, available) VALUES
(1, 3, false );

INSERT INTO availability (day, time_slot) VALUES
("Monday", "10:00 AM - 11:00 AM");
INSERT INTO availability (day, time_slot) VALUES
("Tuesday", "10:00 AM - 11:00 AM");
INSERT INTO availability (day, time_slot) VALUES
("Wednesday", "10:00 AM - 11:00 AM");

INSERT INTO userSubject (user_id, subject_id) VALUES 
(1, 1);
INSERT INTO userSubject (user_id, subject_id) VALUES 
(1, 2);
INSERT INTO userSubject (user_id, subject_id) VALUES 
(4, 3);


INSERT INTO subject (subjectName) VALUES
("Chemistry");
INSERT INTO subject (subjectName) VALUES
("Calculus");
INSERT INTO subject (subjectName) VALUES
("Philosophy");


INSERT INTO session (tutor_id, student_id, availability_id, state) VALUES
(1, 2, 1, "scheduled");

INSERT INTO session (tutor_id, student_id, availability_id, state) VALUES
(4, 2, 2, "scheduled");
