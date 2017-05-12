'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getDataById: function(id,callback) {
        User.findById(id)
        .then((users)=>callback(users))
        .catch((err)=>{
          console.log(err);
        });
      },
      getAllData: function(callback) {
        User.findAll()
        .then((users)=>{callback(users)})
        .catch((err)=>{
          console.log(err);
        });
      },
      insertNew: function(user,callback) {
        User.create(user)
        .then(()=>{callback();})
        .catch((err) => {
          console.log(err)
        });
      },
      updateData: function(user,callback) {
        User.update({
          name: user.name,
          updatedAt: new Date()
        },{
          where: {id:user.id}
        })
        .then(()=>{callback();})
        .catch((err) => {
          console.log(err)
        });
      },
      deleteData: function(id,callback) {
        User.destroy({
          where: {
            id: id
          },
          truncate: true /* this will ignore where and truncate the table instead */
        })
        .then(()=>{callback();})
        .catch((err) => {
          console.log(err)
        });
      }
    }
  });
  return User;
};