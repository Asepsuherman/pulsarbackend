'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Room.init({
    code: DataTypes.STRING,
    quiz_id: DataTypes.INTEGER,
    max_participants: DataTypes.INTEGER,
    deadline: DataTypes.DATE,
    is_leaderboard_visible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};