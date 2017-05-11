//Require Sequelize
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Availability = sequelize.define("Availability", {
    // Giving the Availability model a day of type STRING
    day: {
    	type: DataTypes.STRING,
    	allowNull: false,
      	validate: {
        	len: [1]
      	}
    },
    timeSlot: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          len: [1]
        }
    }
    
  });
  return Availability;
};