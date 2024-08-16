'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      { name: 'general', createdAt: new Date(), updatedAt: new Date() },
      { name: 'mentor', createdAt: new Date(), updatedAt: new Date() },
      { name: 'superadmin', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
