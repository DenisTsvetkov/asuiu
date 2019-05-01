'use strict';
module.exports = (sequelize, DataTypes) => {
  const RequestStatus = sequelize.define('Request-status', {
    id_request: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});
  RequestStatus.associate = function(models) {
    // associations can be defined here
  };
  return RequestStatus;
};