"use strict";
var models = require("./../models");

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let profiles = [];
    for (let i = 1; i <= 10; i++) {
      profiles.push({
        userId: i,
        city: `city ${i}`,
        distance: i,
        gender: "male",
        hobbies: `hobby ${i}`,
        ethnicity: `ethnic ${i}`,
        height: `${i} ft`,
        weight: `${i}0`,
        portfolio: `rahh ${i}`,
        offspring: true,
        description: `i am a god ${i}`
      });
    }

    return queryInterface.bulkInsert("Profiles", profiles);
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Profiles", null, {}, models.Profile);
  }
};
