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
    await queryInterface.bulkInsert('Participants', [
      { user_id: 1, room_id: 1, joined_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, room_id: 1, joined_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, room_id: 2, joined_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, room_id: 3, joined_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, room_id: 4, joined_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, room_id: 2, joined_at: new Date(), createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Participants', null, {});
  }
};
