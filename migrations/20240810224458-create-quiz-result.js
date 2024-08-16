'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuizResults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      quiz_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Quizzes',
          key: 'id'
        },
      },
      correct_answers: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      wrong_answers: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unanswered_questions: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      average_answer_speed: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      total_points: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rating: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      recording_time_to_answer_questions: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      total_recording_time_for_answering_questions: {
        type: Sequelize.DECIMAL,
        allowNull: false,
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('QuizResults');
  }
};