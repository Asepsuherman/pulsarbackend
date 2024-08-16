'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      quiz_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Quizzes',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      question_text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      correct_answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      options: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  },
};
