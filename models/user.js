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

  },
    // Here we'll pass a second "classMethods" object into the define method
  {
      // We're saying that we want our User to have Available times and Subjects
      classMethods: {
        associate: function(models) {
          // Associating User with Availability and Subject
          // When a user is deleted, also delete any associated availabilities and subjects
          User.hasMany(models.Availability, {
            onDelete: "cascade"
          });
          User.hasMany(models.Subject, {
          	onDelete: "cascade"
          });
        }
      }
    }
  );
  return User;
};