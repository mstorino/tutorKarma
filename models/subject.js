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
    
  });
  return Subject;
};