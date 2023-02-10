'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.changeColumn('CompanyDetails', 'description', {
          type: Sequelize.TEXT,
         
        }),
      ]);
    };
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn('CompanyDetails', 'description')]);
  }
};
