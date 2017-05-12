'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
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
    },
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
          console.log(err.message);
        });
      },
      getAllData: function(callback) {
        User.findAll()
        .then((users)=>{callback(users)})
        .catch((err)=>{
          console.log(err.message);
        });
      },
      insertNew: function(user,callback,errcallback) {
        User.create(user)
        .then(()=>{callback();})
        .catch((err) => {
          // console.log(err.message)
          errcallback(err);
        });
      },
      updateData: function(user,callback) {
        User.update({
          name: user.name,
          email: user.email,
          updatedAt: new Date()
        },{
          where: {id:user.id}
        })
        .then(()=>{callback();})
        .catch((err) => {
           console.log(err)
        });
      },
      deleteData: function(id,callback,errcallback) {
        User.destroy({
          where: {
            id: id
          },
          truncate: true /* this will ignore where and truncate the table instead */
        })
        .then(()=>{callback();});
      }
    }
  });
  return User;
};