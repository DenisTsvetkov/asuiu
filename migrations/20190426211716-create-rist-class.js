'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RistClasses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_risk: {
        type: Sequelize.STRING
      },
      score_from: {
        type: Sequelize.INTEGER
      },
      score_before: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('RistClasses');
  }
};