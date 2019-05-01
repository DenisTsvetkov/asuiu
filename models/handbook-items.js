'use strict';
module.exports = (sequelize, DataTypes) => {
  const HandbookItems = sequelize.define('Handbook-items', {
    id_handbook: DataTypes.INTEGER,
    value: DataTypes.STRING
  }, {});
  HandbookItems.associate = function(models) {
    // associations can be defined here
  };
  return HandbookItems;
};