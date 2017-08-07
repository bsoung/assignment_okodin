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
    let users = [];
    for (let i = 1; i <= 10; i++) {
      users.push({
        profileId: i,
        fname: `Foo${i}`,
        lname: `Bar${i}`,
        email: `foobar${i}@gmail.com`,
        password: `${i}${i}`
      });
    }

    return queryInterface.bulkInsert("Users", users);
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Users", null, {}, models.User);
  }
};
