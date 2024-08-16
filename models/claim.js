'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Claim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Claim.init({
    user_id: DataTypes.INTEGER,
    claim_type: DataTypes.STRING,
    claim_amount: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    claimed_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Claim',
  });
  return Claim;
};