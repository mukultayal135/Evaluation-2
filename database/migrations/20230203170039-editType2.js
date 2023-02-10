'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('CompanyDetails', 'description', {
        type: Sequelize.TEXT,
        allowNull: true,
      })
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('your table name ', 'name', {
        type: Sequelize.STRING,
        allowNull: true,
      })
    ]);
  }
};
