USE tutor_db;

INSERT INTO subjects (subjectName, createdAt, updatedAt) VALUES

("Biology", "2017-09-02", "2017-04-01"),
("Calculus", "2017-11-21", "2017-12-22"),
("Chemistry", "2017-12-22", "2017-12-22"),
("Economics","2017-04-19", "2017-09-15"),
("History", "2017-04-19", "2017-09-15"),
("Philosophy", "2017-10-21", "2017-12-22");


INSERT INTO Users (firstName, lastName, about, email, createdAt, updatedAt, SubjectId) VALUES

("Paul", "Bunyan","The natural world is a fascinating place.  When we explore that world the possibilities are endless.", "paulbunyan@email1.com", "2017-12-12", "2017-11-22", 1),

("Jacques", "Cousteau","Biology has always been a passion of mine", "jacques@email1.com", "2017-10-12", "2017-11-23", 1),

("Betsy", "Ross","Numbers are my life, and I love teaching Calculus.", "betsyRoss@email1.com", "2017-12-12", "2017-11-22", 2),

("Johnny", "Appleseed","My mentor in Chemistry was Karel Hartlieb.  I want to mentor other Chemistry students.", "johnnyAppleseed@email1.com", "2017-11-12", "2017-10-22", 3),

("Rahul", "Nallappa", "I like helping people.", "rahulnallappa@email1.com",  "2017-12-22", "2017-12-22", 4),

("Rachel", "Cook", "I am a graduate student in the Economics department.", "rahulnallappa@email1.com",  "2017-12-22", "2017-12-22", 4),

("Bill", "Blue","Economics is more powerful than politics when it comes to the forces that shape our world.", "billBlue@email1.com", "2017-12-12", "2017-11-22", 4),

("George", "Washington", "History is not a story, it is a dialogue.", "george@email1.com","2017-12-22", "2017-12-22", 5),

("Jane", "Doe","Philosophy is the essence of what it means to be alive.", "janeDoe@email1.com",  "2017-10-12", "2017-11-12", 6);

