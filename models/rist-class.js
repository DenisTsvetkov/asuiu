'use strict';
module.exports = (sequelize, DataTypes) => {
  const RistClass = sequelize.define('Rist-class', {
    name_risk: DataTypes.STRING,
    score_from: DataTypes.INTEGER,
    score_before: DataTypes.INTEGER
  }, {});
  RistClass.associate = function(models) {
    // associations can be defined here
  };
  return RistClass;
};