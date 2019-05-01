'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClientDocument = sequelize.define('ClientDocument', {
    id_client: DataTypes.INTEGER,
    series: DataTypes.STRING,
    number: DataTypes.STRING,
    id_document: DataTypes.INTEGER,
    document_type: DataTypes.STRING
  }, {});
  ClientDocument.associate = function(models) {
    // associations can be defined here
    ClientDocument.belongsTo(models.Client, {as: 'Client', foreignKey: 'id_client'});
    
    ClientDocument.hasOne(models.Passport, {as: 'passport', foreignKey:'id_document'});
    ClientDocument.hasOne(models.InternationalPassport, {as: 'internation_passport', foreignKey:'id_document'});
    ClientDocument.hasOne(models.Passport, {as: 'passport', foreignKey:'id_document'});
  };
  return ClientDocument;
};