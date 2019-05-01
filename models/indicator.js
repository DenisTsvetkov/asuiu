'use strict';
module.exports = (sequelize, DataTypes) => {
  const Indicator = sequelize.define('Indicator', {
    total_score: DataTypes.REAL
  }, {});
  Indicator.associate = function(models) {
    // associations can be defined here
  };
  return Indicator;
};