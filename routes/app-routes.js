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
         available: 1
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

  app.put("/student/:id", function(req, res) {
    db.User.update({
        available: req.body.available
      },
        {
      where: {
        id: req.params.id,
      }
    }).then(function(dbTutors) {
      res.redirect("/student");
    });
  });



  // app.put("/api/users", function(req, res) {
  //   db.User.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //   .then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  app.get("/tutor", function (req, res) {
   db.Subject.findAll({
   }).then(function(dbSubjects){
      res.render("tutor", {
        availSubject: dbSubjects
      })
    }); 
  });


app.get("/student/id", function (req, res) {
   db.UserSubjects.findAll({
   }).then(function(dbSubjects){
    // [{id: 1, SubjectName: 'math'}]
     // console.log(dbSubjects);
     db.User.findAll({
        
     }).then(function(dbTutors){

     });
   });
 });

app.post("/tutor", function(req, res) {
  console.log(req.body)
  console.log(req.body.SubjectId);
  db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    about: req.body.about,
    SubjectId: req.body.SubjectId
  }).then(function() {
    res.redirect("/tutor");
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

  app.delete("/admin/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTutors) {
      res.redirect("/delete");
    });
  });

  app.put("/admin/:id", function(req, res) {
    db.User.update({
        available: req.body.available
      },
        {
      where: {
        id: req.params.id,
      }
    }).then(function(dbTutors) {
      res.redirect("/admin");
    });
  });

app.get("/delete", function (req, res) {
    db.Subject.findAll({
   }).then(function(dbSubjects){
    
     db.User.findAll({
        
     }).then(function(dbTutors){
        res.render("delete", {
        availSubject: dbSubjects,
        availTutor: dbTutors,
        availTutorArray: JSON.stringify(dbTutors),
        availSubjArray: JSON.stringify(dbSubjects)
      
        })
      }); 
    });
  });

  

};