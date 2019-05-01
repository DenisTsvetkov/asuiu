'use strict';
module.exports = (sequelize, DataTypes) => {
  const Passport = sequelize.define('Passport', {
    name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    surname: DataTypes.STRING,
    sex: DataTypes.STRING,
    birthday: DataTypes.DATE,
    registration_date: DataTypes.STRING
  }, {});
  Passport.associate = function(models) {
    // associations can be defined here
    Passport.belongsTo(models.ClientDocument, {as: 'passport', foreignKey: 'id_document'})
  };
  return Passport;
};