"use strict";
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
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
  });

  Profile.associate = function(models) {
    Profile.hasOne(models.User, {
      foreignKey: "profileId"
    });
  };
  return Profile;
};
