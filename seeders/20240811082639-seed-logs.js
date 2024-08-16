'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Logs', [
      { user_id: 1, action: 'Login', details: 'User logged in', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, action: 'Quiz Taken', details: 'User completed quiz 1', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, action: 'Claim Token', details: 'User claimed daily token', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, action: 'Profile Update', details: 'User updated profile information', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, action: 'Logout', details: 'User logged out', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Logs', null, {});
  }
};
