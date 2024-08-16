'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Question.init({
    quiz_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Quizzes',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    question_text: DataTypes.TEXT,
    correct_answer: DataTypes.STRING,
    options: DataTypes.JSONB,
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'Questions',
    timestamps: true, // Untuk `createdAt` dan `updatedAt`
  });
  return Question;
};