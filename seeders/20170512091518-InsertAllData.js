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
    return queryInterface.bulkInsert('Users', [
      {"Username":"Ev Alway","email":"ealway1@unblog.fr","createdAt":new Date(),"updatedAt":new Date()},
      {"Username":"Daisey Buttress","email":"dbuttress2@hubpages.com","createdAt":new Date(),"updatedAt":new Date()},
      {"Username":"Grethel Swayton","email":"gswayton3@feedburner.com","createdAt":new Date(),"updatedAt":new Date()},
      {"Username":"Kit Dreng","email":"kdreng4@ovh.net","createdAt":new Date(),"updatedAt":new Date()},
      {"Username":"Aldwin Passby","email":"apassby5@is.gd","createdAt":new Date(),"updatedAt":new Date()}
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
