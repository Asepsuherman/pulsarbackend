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
    await queryInterface.bulkInsert('Users', [
      { username: 'user1', email: 'user1@example.com', password: 'hashedpassword1', avatar: 'avatar1.png', role_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { username: 'user2', email: 'user2@example.com', password: 'hashedpassword2', avatar: 'avatar2.png', role_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { username: 'mentor1', email: 'mentor1@example.com', password: 'hashedpassword3', avatar: 'avatar3.png', role_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { username: 'mentor2', email: 'mentor2@example.com', password: 'hashedpassword4', avatar: 'avatar4.png', role_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { username: 'admin1', email: 'admin1@example.com', password: 'hashedpassword5', avatar: 'avatar5.png', role_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { username: 'admin2', email: 'admin2@example.com', password: 'hashedpassword6', avatar: 'avatar6.png', role_id: 3, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
