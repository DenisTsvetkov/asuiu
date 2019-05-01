'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Passports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      middle_name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      registration_date: {
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
    return queryInterface.dropTable('Passports');
  }
};