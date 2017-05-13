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
  app.get("/api/availabilities", function(req, res) {
    db.Availability.findAll({
    }).then(function(dbAvailability) {
      res.json(dbAvailability);
    });
  });

  app.get("/api/availabilities/:id", function(req, res) {
    db.Availability.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(dbAvailability) {
      res.json(dbAvailability);
    });
  });

  app.post("/api/availabilities", function(req, res) {
    db.Availability.create(req.body).then(function(dbAvailability) {
      res.json(dbAvailability);
    });
  });

  app.delete("/api/availabilities/:id", function(req, res) {
    db.Availability.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAvailability) {
      res.json(dbAvailability);
    });
  });

};
