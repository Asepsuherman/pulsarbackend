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
    await queryInterface.bulkInsert('Rooms', [
      { code: 'ROOM1', quiz_id: 1, max_participants: 30, deadline: new Date(), is_leaderboard_visible: true, createdAt: new Date(), updatedAt: new Date() },
      { code: 'ROOM2', quiz_id: 2, max_participants: 25, deadline: new Date(), is_leaderboard_visible: false, createdAt: new Date(), updatedAt: new Date() },
      { code: 'ROOM3', quiz_id: 3, max_participants: 20, deadline: new Date(), is_leaderboard_visible: true, createdAt: new Date(), updatedAt: new Date() },
      { code: 'ROOM4', quiz_id: 4, max_participants: 15, deadline: new Date(), is_leaderboard_visible: false, createdAt: new Date(), updatedAt: new Date() },
      { code: 'ROOM5', quiz_id: 5, max_participants: 10, deadline: new Date(), is_leaderboard_visible: true, createdAt: new Date(), updatedAt: new Date() },
      { code: 'ROOM6', quiz_id: 1, max_participants: 10, deadline: new Date(), is_leaderboard_visible: true, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};
