'use strict';
module.exports = (sequelize, DataTypes) => {
  const DriverLicense = sequelize.define('Driver-license', {
    name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    surname: DataTypes.STRING,
    sex: DataTypes.STRING,
    birthday: DataTypes.DATE,
    registration_date: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  DriverLicense.associate = function(models) {
    // associations can be defined here
  };
  return DriverLicense;
};