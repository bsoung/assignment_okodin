'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    city: DataTypes.STRING,
    distance: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    hobbies: DataTypes.STRING,
    ethnicity: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    portfolio: DataTypes.STRING,
    offspring: DataTypes.BOOLEAN,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Profile;
};