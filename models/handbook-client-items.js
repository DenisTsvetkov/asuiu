'use strict';
module.exports = (sequelize, DataTypes) => {
  const HandbookClientItems = sequelize.define('Handbook-client-items', {
    id_client: DataTypes.INTEGER,
    id_handbook_item: DataTypes.INTEGER
  }, {});
  HandbookClientItems.associate = function(models) {
    // associations can be defined here
  };
  return HandbookClientItems;
};