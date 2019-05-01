'use strict';
module.exports = (sequelize, DataTypes) => {
  const Handbook = sequelize.define('Handbook', {
    name: DataTypes.STRING
  }, {});
  Handbook.associate = function(models) {
    // associations can be defined here
  };
  return Handbook;
};