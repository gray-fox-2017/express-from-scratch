'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn(
      'Users',
      'email',
      {
        type: Sequelize.STRING,
        validate:{
          isEmail : {
            msg: "Email tidak sesuai format"
          },
          isUnique: function (value,next){
            if(value){
              User
              .find({ where: {email:value }})
              .then(function (user) {
                if (user) next ("Email sudah ada");
                else next();
              }).error(function (err) {
                next(err.message);
              });
            }

          }
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
