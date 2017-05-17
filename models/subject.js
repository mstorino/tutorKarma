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
        
        Subject.belongsToMany(models.User, {
          through: "UserSubject",
          foreignKey: "subject_id"
        });
      }
    }
  });
  return Subject;
};