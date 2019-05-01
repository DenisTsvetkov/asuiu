'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blacklist = sequelize.define('Blacklist', {
    id_client: DataTypes.INTEGER
  }, {});
  Blacklist.associate = function(models) {
    // associations can be defined here
  };
  return Blacklist;
};