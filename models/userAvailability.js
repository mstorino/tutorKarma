//Require Sequelize
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var UserAvailability = sequelize.define("UserAvailability", {
    // Giving the UserAvailability model an available of type BOOLEAN
    available: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    }
  },
  {
    classMethods: {
      associate: function(models) {
        // A user_id and available_id foreign keys are required or user availability entry cannot be made
        UserAvailability.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        }),
        UserAvailability.belongsTo(models.Availability, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }  
  });
  return UserAvailability;
  
};