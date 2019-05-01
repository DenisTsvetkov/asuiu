'use strict';
module.exports = (sequelize, DataTypes) => {
  const CreditType = sequelize.define('Credit-type', {
    name_credit: DataTypes.STRING,
    condition: DataTypes.STRING,
    rate: DataTypes.DECIMAL,
    time: DataTypes.DATE
  }, {});
  CreditType.associate = function(models) {
    // associations can be defined here
  };
  return CreditType;
};