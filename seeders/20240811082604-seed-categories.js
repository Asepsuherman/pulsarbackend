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
    await queryInterface.bulkInsert('Categories', [
      { name: 'Planets', description: 'Quiz tentang Planet', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Satellites', description: 'Quiz tentang Satelit', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Solar System', description: 'Quiz tentang Solar System', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Galaxies', description: 'Quiz tentang Galaksi', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
