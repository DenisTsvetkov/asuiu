'use strict';
module.exports = (sequelize, DataTypes) => {
  const CreditHistory = sequelize.define('Credit-history', {
    id_client: DataTypes.INTEGER,
    bank_name: DataTypes.STRING,
    credit_amount: DataTypes.DECIMAL,
    time: DataTypes.BIGINT,
    delay: DataTypes.BIGINT,
    current_state: DataTypes.STRING
  }, {});
  CreditHistory.associate = function(models) {
    // associations can be defined here
  };
  return CreditHistory;
};