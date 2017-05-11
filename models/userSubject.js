//Require Sequelize
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var UserSubject = sequelize.define("UserSubject", {
    // Giving the UserSubject model a subject of type BOOLEAN
    subject: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    }
  },
  {
    classMethods: {
      associate: function(models) {
        // A user_id and subject_id foreign keys are required or user subject entry cannot be made
        UserSubject.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        }),
        UserSubject.belongsTo(models.Subject, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }    
  });
  return UserSubject;
};