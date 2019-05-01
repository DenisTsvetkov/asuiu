'use strict';
module.exports = (sequelize, DataTypes) => {
  const RequestGraph = sequelize.define('Request-graph', {
    id_begin_status: DataTypes.INTEGER,
    id_end_status: DataTypes.INTEGER
  }, {});
  RequestGraph.associate = function(models) {
    // associations can be defined here
  };
  return RequestGraph;
};