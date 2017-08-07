'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      distance: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      hobbies: {
        type: Sequelize.STRING
      },
      ethnicity: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      portfolio: {
        type: Sequelize.STRING
      },
      offspring: {
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Profiles');
  }
};