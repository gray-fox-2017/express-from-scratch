'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    fisrt_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    hobi: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods: {

    }
  });
  return User;
};
