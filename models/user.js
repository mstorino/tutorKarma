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
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    available: {
      type: DataTypes.BOOLEAN,

    }    

  },
    {
      classMethods: {
        associate: function(models) {
          // A subject (foreignKey) is required or a tutor can't be created
          Subject.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });
  return User;
};