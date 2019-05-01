'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    inn: DataTypes.BIGINT
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
    //console.log('Модели', models);
    

    Client.hasOne(models.ClientProfile, {as: 'Profile', foreignKey:'id_client'})

    Client.hasMany(models.ClientDocument, {as: 'ClientDocument', foreignKey:'id_client'})
  };
  return Client;
};