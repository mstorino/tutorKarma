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
    }

  },
  {
    classMethods: { //need to check alias documentation
      associate: function(models) {
        // A user_id, available_id and subject_id foreign keys are required or session entry cannot be made
        User.belongsToMany(models.Subject, {
          through: "UserSubject",
          foreignKey: "tutor_id"
        });
      }
    }
      
  });
  return User;
};