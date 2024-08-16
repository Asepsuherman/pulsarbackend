'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizResult extends Model {
    static associate(models) {
      // define association here
      QuizResult.belongsTo(models.User, { foreignKey: 'user_id' });
      QuizResult.belongsTo(models.Quiz, { foreignKey: 'quiz_id' });
    }
  }
  QuizResult.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    correct_answers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wrong_answers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unanswered_questions: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    average_answer_speed: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    total_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    recording_time_to_answer_questions: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    total_recording_time_for_answering_questions: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'QuizResult',
  });
  return QuizResult;
};
