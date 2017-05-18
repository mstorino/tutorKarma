// var db = require("../../models");
// // Routes
// // =============================================================
// module.exports = function(app) {
//   app.get("/api/usersubjects", function(req, res) {
//     db.UserSubject.findAll({
//     }).then(function(dbUserSubject) {
//       res.json(dbUserSubject);
//     });
//   });

//   app.get("/api/usersubjects/:SubjectId", function(req, res) {
//     db.UserSubject.findAll({
//     	where: {
//     		SubjectId: req.params.SubjectId
//     	}
//     }).then(function(dbUserSubject) {
//       res.json(dbUserSubject);
//     });
//   });

// };