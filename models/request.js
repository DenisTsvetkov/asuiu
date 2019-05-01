'use strict';
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    id_costumer_profile: DataTypes.INTEGER,
    request_credit_amount: DataTypes.DECIMAL,
    id_credit_type: DataTypes.INTEGER
  }, {});
  Request.associate = function(models) {
    // associations can be defined here
  };
  return Request;
};