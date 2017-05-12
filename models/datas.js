'use strict';
module.exports = function(sequelize, DataTypes) {
  var datas = sequelize.define('datas', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    subject: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return datas;
};