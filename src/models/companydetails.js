'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyDetails.init({
    companyId: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ceo: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    score: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'CompanyDetails',
  });
  return CompanyDetails;
};