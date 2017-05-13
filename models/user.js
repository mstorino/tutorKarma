//Require Sequelize
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING and a role of type STRING
    firstName: {
    	type: DataTypes.STRING,
    	allowNull: false,
      	validate: {
        	len: [1]
      	}
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          len: [1]
        }
    },
    about: {
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.STRING,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    role: {
    	type: DataTypes.STRING,
    	allowNull: false,
      	validate: {
        	len: [1]
      	}
    },

  });
  return User;
};