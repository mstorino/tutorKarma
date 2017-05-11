//Require Sequelize
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define("Session", {
    // Giving the session model a sessionState of type STRING
    sessionState: {
    	type: DataTypes.STRING,
    	defaultValue: "scheduled",
      allowNull: false, //this might be redundant 
        validate: {
          len: [1]
        }
    }
  },
  {
    classMethods: { //need to check alias documentation
        associate: function(models) {
          // A user_id, available_id and subject_id foreign keys are required or session entry cannot be made
          Session.belongsTo(models.User, {
            as: "tutor"
            foreignKey: "tutor_id"
          });
          /*Session.belongsTo(models.Subject, {
            foreignKey: {
              allowNull: false
            }
          }),
          Session.belongsTo(models.Availability, {
            foreignKey: {
              allowNull: false
            }
          });*/
        }
      }
    }
    
  });
  return Session;
  }
};