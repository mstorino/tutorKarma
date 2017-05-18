var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function (req, res) {
    res.render("index")
  });

  app.get("/student", function (req, res) {
   db.Subject.findAll({
   }).then(function(dbSubjects){
    
     db.User.findAll({
        where: {
         available: null
        }
     }).then(function(dbTutors){
        res.render("student", {
        availSubject: dbSubjects,
        availTutor: dbTutors,
        availTutorArray: JSON.stringify(dbTutors),
        availSubjArray: JSON.stringify(dbSubjects)
      
        })
      }); 
    });
  });

// app.get("/student/id", function (req, res) {
   
//      db.User.findAll({
//         where: {
//          id: req.params.id 
//         }
//      }).then(function(dbSpecificTutor){
//         res.render("student/id", {
//         availTutor: dbSpecificTutor
//       // console.log(dbTutors);
        
//       }); 
//     });
//   });


  app.get("/tutor", function (req, res) {
    res.render("tutor")
  });

  app.get("/admin", function (req, res) {
   db.Subject.findAll({
   }).then(function(dbSubjects){
    
     db.User.findAll({
        
     }).then(function(dbTutors){
        res.render("admin", {
        availSubject: dbSubjects,
        availTutor: dbTutors,
        availTutorArray: JSON.stringify(dbTutors),
        availSubjArray: JSON.stringify(dbSubjects)
      
        })
      }); 
    });
  });


  

};