'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Quiz.belongsTo(models.Category, { foreignKey: 'category_id' });
    }
  }
  Quiz.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slogan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    quiz_rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    popular: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    point_per_question: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_question: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration_per_question: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};