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
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
        validate: {
          len: [1]
        }
    },
    about: {
      type: DataTypes.TEXT,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          len: [1]
        }
    },
    last_login: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active"
    },
    role: {
    	type: DataTypes.STRING,
    	allowNull: false,
      	validate: {
        	len: [1]
      	}
    }

  });
  return User;
};