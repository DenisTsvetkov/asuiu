'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ClientDocuments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_client: {
        type: Sequelize.INTEGER
      },
      series: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      id_document: {
        type: Sequelize.INTEGER
      },
      document_type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    },
    {
      timestamps: true,
    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ClientDocuments');
  }
};