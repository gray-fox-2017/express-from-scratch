'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username: 'abcd',
      email: 'abcd@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'efgh',
      email: 'efgh@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'klihn',
      email: 'klihn@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {})
  }
};
