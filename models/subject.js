//Require Sequelize
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define("Subject", {
    // Giving the Subject model a subjectName of type STRING
    subjectName: {
    	type: DataTypes.STRING,
    	allowNull: false,
      	validate: {
        	len: [1]
      	}
    }
    
  },
  {
    classMethods: {
        associate: function(models) {
          // Associating subjects with users
          // When a subject is deleted (never), also delete any associated tutors
          Subject.hasMany(models.User, {
            onDelete: "cascade"
          });
        }
      }
    });
  return Subject;
};