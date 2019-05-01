'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClientProfile = sequelize.define('ClientProfile', {
    id_client: DataTypes.INTEGER,
    salary: DataTypes.DECIMAL,
    phone: DataTypes.STRING,
    statement: DataTypes.BOOLEAN
  }, {});
  ClientProfile.associate = function(models) {
    // associations can be defined here
    ClientProfile.belongsTo(models.Client, {as: 'Client', foreignKey: 'id_client'})
  };
  return ClientProfile;
};