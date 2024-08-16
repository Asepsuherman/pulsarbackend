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
    await queryInterface.bulkInsert('Claims', [
      { user_id: 1, claim_type: 'Daily Token', claim_amount: 1.00, status: 'Claimed', claimed_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, claim_type: 'Daily Token', claim_amount: 1.00, status: 'Claimed', claimed_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, claim_type: 'Daily Token', claim_amount: 1.00, status: 'Claimed', claimed_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, claim_type: 'Daily Token', claim_amount: 1.00, status: 'Claimed', claimed_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, claim_type: 'Daily Token', claim_amount: 1.00, status: 'Claimed', claimed_at: new Date(), createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Claims', null, {});
  }
};
