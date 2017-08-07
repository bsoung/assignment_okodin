"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasOne(models.Profile, {
      foreignKey: "userId"
    });
    User.belongsTo(models.Profile, {
      foreignKey: "id"
    })
  };
  return User;
};
