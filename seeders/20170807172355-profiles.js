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
    for (let i = 0; i < 10; i++) {
      profiles.push({
        city: "foo",
        distance: 4,
        gender: "male",
        hobbies: "foo bar",
        ethnicity: "foobar",
        height: "7 ft",
        weight: 10,
        portfolio: "rahh",
        offspring: true,
        description: "i am a god"
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
