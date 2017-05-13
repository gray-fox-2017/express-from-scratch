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
      fisrt_name: 'Deri',
      last_name: 'kurniawan',
      hobi: 'berenang',
      username: 'derikurniawan',
      email: 'deri@gmail.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      fisrt_name: 'Nugraha',
      last_name: 'Nugraha',
      hobi: 'footsal',
      username: 'Nunu',
      email: 'nunu@gmail.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }], {})
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
