'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Quizzes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slogan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gallery: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      quiz_rating: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      popular: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      point_per_question: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_question: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      duration_per_question: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
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
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Quizzes');
  }
};