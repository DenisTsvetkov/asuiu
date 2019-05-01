'use strict';
module.exports = (sequelize, DataTypes) => {
  const InternationalPassport = sequelize.define('International-passport', {
    name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    surname: DataTypes.STRING,
    sex: DataTypes.STRING,
    birthday: DataTypes.DATE,
    registration_date: DataTypes.STRING
  }, {});
  InternationalPassport.associate = function(models) {
    // associations can be defined here
  };
  return InternationalPassport;
};