// Need models to be completed and ajax calls to be written in public/js files to 
// insert appropriate routing 


// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.User.findAll({
    }).then(function(dbTutor) {
      res.json(dbTutor);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    db.Tutor.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(dbTutor) {
      res.json(dbTutor);
    });
  });

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
