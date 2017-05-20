# tutorKarma 

CONTENTS OF THIS FILE

----------------------

*Introduction
*Installation
*Using the application

INTRODUCTION
-------------

Team Name: Karma
Team Mascot: Quokka

Community based tutoring application utilizing Git, Github, Pull Requests, HTML, CSS, JavaScript, Node, npm, Express.js, MySQL, Schema and Seed files, Sequelize.js, RESTful Routes, External APIs, Bootstrap, jQuery and Handlebars.

tutorKarma is a data-focused application that connects students with tutors in their local community based on area of expertise. The application utilizes a data persistence layer (MySQL) with full CRUD capabiliites. tutorKarma runs in a development environment (localhost).

The core features of the application include: Students find tutors through a customized student portal that displays tutors based on subject matter or name. The student can then book a tutor.  Tutors can complete a form to be added to the list of available tutors. Administrators can update or delete tutors in the database.      



INSTALLATION
---------------

All dependencies can be installed using the node_modules file. 

1.Install MySQL 
2.Go to https://github.com/mstorino/tutorKarma
3. Select "Clone or download" and copy the url
4.In your command line, go to the folder where you will be storing the file
5.Enter "git clone (url)"
6.Enter "npm install" to install the required modules
7.Once the dependencies have been installed, open the "config.json" file and enter your mySQL password in the three places where it is required
8.Open mySQL and run the schema file to create the database.
9. In the command line, enter "node server.js"
10.You will see "App listening on port (portnumber)"



USING THE APPLICATION
----------------------
1.Go to http://localhost:(portnumber)
Hey guys, I'm running a bit late, stuck waiting for a purple line at Howard
2. To search for a tutor, select "search tutors"
3. Select the desired subject from the Subject List
4. A list of tutors who teach that subject will display
5.Select "book tutor" to book a tutor
6.To update and delete tutors go to http://localhost:portnumber/admin
7. Select "Delete" or "Unavailable" and "Update" to update the database
8.To become a tutor, go to http://localhost:portnumber/tutor
9.Enter first name, last name, email, description and select a subject from subject list.  Select "Submit"






