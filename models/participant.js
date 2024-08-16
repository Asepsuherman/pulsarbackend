'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Participant.init({
    user_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    joined_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Participant',
  });
  return Participant;
};