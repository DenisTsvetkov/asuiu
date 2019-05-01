'use strict';
module.exports = (sequelize, DataTypes) => {
  const Formula = sequelize.define('Formula', {
    name: DataTypes.STRING,
    formula: DataTypes.STRING
  }, {});
  Formula.associate = function(models) {
    // associations can be defined here
  };
  return Formula;
};