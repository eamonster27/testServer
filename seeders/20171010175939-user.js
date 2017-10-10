'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: "Eamon",
      email: "eamonbachari@gmail.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "Camila",
      email: "cpr32@txstate.edu",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "Nahid",
      email: "njb1999@gmail.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "Masoud",
      email: "bacharima@gmail.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "Omid",
      email: "obachari@gmail.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "Kafah",
      email: "kafah.bachari@gmail.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "Dan",
      email: "danielhaggerty1976@gmail.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
