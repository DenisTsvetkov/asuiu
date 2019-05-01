'use strict';
module.exports = (sequelize, DataTypes) => {
  const Scores = sequelize.define('Scores', {
    id_item: DataTypes.INTEGER,
    score: DataTypes.DOUBLE
  }, {});
  Scores.associate = function(models) {
    // associations can be defined here
  };
  return Scores;
};